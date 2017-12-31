const setupClickHandler = require('./lib/setupClickHandler');
const createPool = require('./lib/browser');
const createInjectableUtils = require('./lib/createInjectableUtils');
const injectJQuery = require('./lib/injectJQuery');
const axios = require('axios');

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

module.exports = async function processBrowserLite({ queueItem, scraper, loadAll = false }) {
  const currentPool = futurePool;
  const pool = await currentPool;

  const browser = await pool.acquire();

  const data = {
    queue: [],
    data: undefined,
    finalUrl: queueItem.url,
  };

  try {
    // scraper.log.verbose(`navigate to ${queueItem.url}`);
    if (loadAll === true) {
      await browser.goto(queueItem.url);
    } else {
      const UA = queueItem.userAgent ||
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_1) AppleWebKit/537.36 ' +
        '(KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36';
      const response = await axios.get(queueItem.url, {
        headers: {
          'user-agent': UA,
          accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
          'accept-language': 'en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
        },
      });

      await browser.setContent(response.data);
    }

    // scraper.log.verbose('Injecting Zepto...')
    await injectJQuery(browser);

    // scraper.log.verbose('Injecting click handler...');
    await setupClickHandler(browser);

    return await runWithInjectables(browser, scraper.construct, createInjectableUtils(queueItem));
  } catch (err) {
    if (err.message.match(/Execution context was destroyed/)) {
      return data;
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
