/* globals bot */
/* eslint-disable no-underscore-dangle */

const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const Injectable = require('./lib/Injectable.js');
const queueUtil = require('./lib/queue-util.js');
const dataUtil = require('./lib/data-util.js');
const within = require('./lib/within.js');
const during = require('./lib/during.js');
const createPool = require('./lib/browser.js');

let futurePool = createPool({ min: 0, max: 20 });

const atomsSrc = fs.readFileSync(path.join(__dirname, './lib/atoms.js'), 'utf8');

const getSourceForModule = _.memoize(
  moduleName => fs.readFileSync(require.resolve(moduleName), 'utf8')
);

async function injectJQuery(browser) {
  await browser.evaluate(
    `
      var _old$ = window.$;
      var _oldjQuery = window.jQuery;
      ${getSourceForModule('jquery')};
      window.__SCRAPERJS_JQUERY = window.jQuery;
      window.$ = _old$;
      window.jQuery = _oldjQuery;
    `,
  );
}

async function injectAtoms(browser) {
  await browser.evaluate(`${atomsSrc}; window.bot = bot;`);
}

async function fixClickHandlers(browser) {
  await browser.evaluate(() => {
    window.__SCRAPERJS_JQUERY.fn.extend({ // eslint-disable-line no-underscore-dangle
      click() {
        bot.action.click(this.get(0));
      },
    });
  });
}

function constructUtils(queueItem) {
  const injectable = new Injectable();
  // @todo we might have to white list some fields here...
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
  });
  injectable.register({
    queueAll() {
      return function queueAll($els, conf = {}) {
        if (typeof $els === 'string') {
          $els = $($els);
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
    return new Promise((resolve, reject) => {
      const utils = eval(utilsStr); // eslint-disable-line no-eval
      const fnFromString = (fnStr) => {
        const [, args, body] = fnStr.match(/^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/);
        return new Function(args.split(','), body); // eslint-disable-line no-new-func
      };

      const scraper = fnFromString(constructScraperStr)();

      let result;

      try {
        result = scraper[utils.queueItem.method](utils); // eslint-disable-line no-undef
      } catch (error) {
        return reject({
          error,
          from: 'user function',
          message: error.message,
        });
      }

      if (result && result.then && typeof result.then === 'function') {
        const curryCallback = () => resolve({
          queue: utils.queue.getQueue(),
          data: utils.data.getData(),
          finalUrl: window.location.href,
        });
        result.then(
          curryCallback,
          error => reject({
            error,
            message: error.message,
            from: 'user function promise',
            err: JSON.stringify(error),
            stack: error.stack,
          })
        );
        return undefined;
      }

      return resolve({
        queue: utils.queue.getQueue(),
        data: utils.data.getData(),
        finalUrl: window.location.href,
      });
    })
      .catch((e) => {
        console.error('An error occurred', e);
        throw e;
      });
  };

  return browser.evaluate(
    runTheFunction,
    constructScraper.toString(),
    injectable.build(),
  );
}

async function addToolsToBrowser(browser, log) {
  log('inject jquery');
  await injectJQuery(browser);
  log('inject atoms');
  await injectAtoms(browser);
  log('fix jquery click function');
  await fixClickHandlers(browser);
}

//(node:53474) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Error: Navigation Timeout Exceeded: 30000ms exceeded

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

    try {
      await pool.release(browser);
    } catch (e) {
      console.error('could not release browser', e);
    }

    return data;
  } catch (err) {
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
