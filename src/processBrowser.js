/* eslint-disable no-underscore-dangle */

const _ = require('lodash');
const fs = require('fs');

const Injectable = require('./lib/Injectable.js');
const queueUtil = require('./lib/injectables/queue-util.js');
const dataUtil = require('./lib/injectables/data-util.js');
const within = require('./lib/injectables/within.js');
const during = require('./lib/injectables/during.js');
const createPool = require('./lib/browser.js');

let futurePool = createPool({ min: 0, max: 20 });

// const atomsSrc = fs.readFileSync(path.join(__dirname, './lib/atoms.js'), 'utf8');

const getSourceForModule = _.memoize(moduleName => fs.readFileSync(require.resolve(moduleName), 'utf8'));

async function injectJQuery(browser) {
  await browser.evaluate(`
    var _old$ = window.$;
    var _oldjQuery = window.jQuery;
    ${getSourceForModule('jquery')};
    window.__SCRAPERJS_JQUERY = window.jQuery;
    window.$ = _old$;
    window.jQuery = _oldjQuery;
  `);
}

async function fixClickHandlers(browser) {
  await browser.evaluate(() => {
    window.__SCRAPERJS_JQUERY.fn.extend({ // eslint-disable-line no-underscore-dangle
      click() {
        this.get(0).click();
        // bot.action.click(this.get(0));
      },
    });
  });
}

function constructUtils(queueItem) {
  const injectable = new Injectable();

  injectable.register({ queueItem });
  injectable.register({ queue: queueUtil });
  injectable.register({ data: dataUtil });
  injectable.register({ within });
  injectable.register({ during });
  injectable.register({
    timeout() {
      return function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };
    },
    onRedirect() {
      const onRedirect = (method) => {
        onRedirect.redirectMethod = method;
      };
      onRedirect.redirectMethod = undefined;
      return onRedirect;
    },
  });
  injectable.register({
    queueAll() {
      return function queueAll(firstParam, conf = {}) {
        let $els;

        if (typeof firstParam === 'string') {
          $els = $(firstParam); // eslint-disable-line no-undef
        } else {
          $els = firstParam;
        }

        $els
          .map((i, x) => $(x).prop('href')).get() // eslint-disable-line no-undef
          // eslint-disable-next-line no-undef
          .forEach(href => queue(Object.assign({ url: href }, conf)));
      };
    },
  });
  injectable.register({
    $() { return window.__SCRAPERJS_JQUERY; }, // eslint-disable-line no-underscore-dangle
  });
  return injectable;
}

function runWithUtils(browser, constructScraper, injectable) {
  // @todo clean this confusion up
  const runTheFunction = (constructScraperStr, utilsStr) => {
    const main = async function main() {
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
          onRedirect: utils.onRedirect.redirectMethod,
        };
      } catch (error) {
        error.from = 'user function';
        throw error;
      }
    };

    return main();
  };

  return browser.evaluate(
    runTheFunction,
    constructScraper.toString(),
    injectable.build(),
  );
}

async function addToolsToBrowser(browser, log) {
  log('Injecting jQuery...');
  await injectJQuery(browser);
  log('Injecting Selenium Atoms...');
  // await injectAtoms(browser);
  log('Fixing $.click()');
  await fixClickHandlers(browser);
}

module.exports = async function processBrowser({ queueItem, scraper }) {
  const currentPool = futurePool;
  const pool = await currentPool;

  const browser = await pool.acquire();

  let data = [];
  const noop = x => x;

  try {
    scraper.log(`navigate to ${queueItem.url}`);

    await browser.goto((scraper.filterUrl || noop)(queueItem.url));
    await addToolsToBrowser(browser, scraper.log);

    data = await runWithUtils(browser, scraper.construct, constructUtils(queueItem));

    console.log(data);
    if (data.onRedirect) {
      console.log('waiting for navigation');
      await browser.waitForNavigation();
      console.log('Changing the method to', data.onRedirect);
      queueItem.method = data.onRedirect;
      data = await runWithUtils(browser, scraper.construct, constructUtils(queueItem));
    }

    try {
      await pool.release(browser);
    } catch (e) {
      console.error('could not release browser', e);
    }

    return data;
  } catch (err) {
    if (err.message.match(/Execution context was destroyed/)) {
      // page redirected whilst executing function, this is all good
      console.log('Page redirected');
      return { queue: [], data: undefined, finalUrl: queueItem.url };
    }

    console.log(err);

    try {
      await pool.release(browser);
    } catch (e) {
      console.error('could not release browser', e);
    }

    if (err.message.match(/Promise was collected/)) {
      console.log('Promise was collected???', err);
      throw err;
    }

    if (err.message.match(/^Navigation Timeout Exceeded/)) {
      console.log('Retrying because of navigation error');
      return processBrowser({ queueItem, scraper });
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

      return processBrowser({ queueItem, scraper });
    }

    console.log('rethrow err', err);

    throw err;
  }
};
