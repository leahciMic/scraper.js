const setupClickHandler = require('./lib/setupClickHandler');
const createPool = require('./lib/browser');
const createInjectableUtils = require('./lib/createInjectableUtils');
const injectJQuery = require('./lib/injectJQuery');

let futurePool = createPool({ min: 0, max: 20 });

function runWithInjectables(browser, constructScraper, injectables) {
  // The following function will bootstrap the scraper, and the injectables
  // inside the browser context. It does not run in the same context as this
  // function, so you will not be able to share variables etc.

  const bootstrapInBrowser = (constructScraperStr, utilsStr) => {
    async function main() {
      const utils = eval(utilsStr); // eslint-disable-line no-eval

      const fnFromString = (fnStr) => {
        const [, args, body] = fnStr.match(/^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/);
        return new Function(args.split(','), body); // eslint-disable-line no-new-func
      };

      const scraper = fnFromString(constructScraperStr)();

      try {
        await scraper[utils.queueItem.method](utils); // eslint-disable-line no-undef
        return {
          queue: utils.queue.getQueue(),
          data: utils.data.getData(),
          finalUrl: window.location.href,
        };
      } catch (error) {
        error.from = 'user function';
        throw error;
      }
    }

    return main();
  };

  return browser.evaluate(
    bootstrapInBrowser,
    constructScraper.toString(),
    injectables.build(),
  );
}

module.exports = async function processBrowserLite({ queueItem, scraper, takeScreenshot = false }) {
  const currentPool = futurePool;
  const pool = await currentPool;

  const browser = await pool.acquire();

  const emptyData = {
    queue: [],
    data: undefined,
    finalUrl: queueItem.url,
  };

  try {
    // scraper.log.verbose(`navigate to ${queueItem.url}`);
    await browser.goto(queueItem.url);

    // scraper.log.verbose('Injecting Zepto...')
    await injectJQuery(browser);

    // scraper.log.verbose('Injecting click handler...');
    await setupClickHandler(browser);

    let data = await runWithInjectables(browser, scraper.construct, createInjectableUtils(queueItem));

    if (data.onRedirect) {
      console.log('waiting for navigation');
      await browser.waitForNavigation();
      console.log('Changing the method to', data.onRedirect);
      queueItem.method = data.onRedirect;
      data = await runWithInjectables(browser, scraper.construct, createInjectableUtils(queueItem));
    }

    if (takeScreenshot) {
      const screenshot = await browser.screenshot({ fullPage: false });
      return { ...data, screenshot };
    }

    return data;
  } catch (err) {
    if (err.message.match(/Execution context was destroyed/)) {
      return emptyData;
    }

    if (err.message.match(/Promise was collected/)) {
      console.log('Promise was collected?', err);
      throw err;
    }

    if (err.message.match(/^Navigation Timeout Exceeded/)) {
      // @todo Need to manage this so it doesn't end in endless cycle
      console.log('Retrying because of navigation error');
      return processBrowserLite({ queueItem, scraper });
    }

    if (
      err.message.match(/^Protocol error \([^)]*\):/)
    ) {
      console.log('Probable browser crash', err.message);

      if (currentPool === futurePool) {
        console.log('create new pool');
        futurePool = createPool({ min: 0, max: 20 });
        console.log('kill and create a new pool');
        pool.kill();
      } else {
        console.log('pool already changed, just retry');
      }

      return processBrowserLite({ queueItem, scraper });
    }

    console.log('rethrow err', err);

    throw err;
  } finally {
    await pool.release(browser);
  }
};
