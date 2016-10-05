import _ from 'lodash';
import fs from 'fs';
import bluebird from 'bluebird';
import wrapFunctionWithBabelHelpers from './lib/wrapFunctionWithBabelHelpers.js';
import Injectable from './lib/Injectable.js';
import queueUtil from './lib/queue-util.js';
import dataUtil from './lib/data-util.js';
import within from './lib/within.js';
import during from './lib/during.js';

const getSourceForModule = _.memoize(
  moduleName => fs.readFileSync(require.resolve(moduleName), 'utf8')
);

async function ensurePromises(browser) {
  if (process.env.HEADLESS) {
    // phantomjs does not support promises yet (24-05-2016)
    await browser.executeScript(getSourceForModule('es6-promise'));
  }
}

async function injectJQuery(browser) {
  await browser.executeScript(getSourceForModule('jquery'));
  await browser.executeScript(() => {
    window.__SCRAPERJS_JQUERY = window.jQuery; // eslint-disable-line no-underscore-dangle
    window.jQuery.noConflict();
  });
}

async function fixClickHandlers(browser) {
  await browser.executeScript(() => {
    // click should simulate a real click, not just for things built with jQuery.
    window.__SCRAPERJS_JQUERY.fn.extend({ // eslint-disable-line no-underscore-dangle
      click() {
        this.get(0).click();
        // this.get(0).dispatchEvent(new MouseEvent('click'));
      },
    });
  });
}

function constructUtils() {
  const injectable = new Injectable();

  injectable.register({ queue: queueUtil });
  injectable.register({ data: dataUtil });
  injectable.register({ within });
  injectable.register({ during });

  injectable.register({
    $() { return window.__SCRAPERJS_JQUERY; }, // eslint-disable-line no-underscore-dangle
  });
  return injectable;
}

async function runWithUtils(browser, origFn, injectable) {
  const fn = wrapFunctionWithBabelHelpers(origFn);

  const runTheFunction = (userFnStr, utilsStr, callback) => {
    const utils = eval(utilsStr); // eslint-disable-line no-eval

    try {
      const fnFromString = (fnStr) => {
        const [, args, body] = fnStr.match(/^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/);
        return new Function(args.split(','), body); // eslint-disable-line no-new-func
      };

      let result;

      try {
        result = fnFromString(userFnStr)(utils); // eslint-disable-line no-undef
      } catch (error) {
        return callback({
          error, from: 'user function', message: error.message,
        });
      }

      if (result && result.then && typeof result.then === 'function') {
        const curryCallback = () => callback({
          queue: utils.queue.getQueue(),
          data: utils.data.getData(),
          finalUrl: window.location.href,
        });
        result.then(
          curryCallback,
          error => callback({
            error,
            message: error.message,
            from: 'user function promise',
            err: JSON.stringify(error),
            stack: error.stack,
          })
        );
        return undefined;
      }

      callback({
        queue: utils.queue.getQueue(),
        data: utils.data.getData(),
        finalUrl: window.location.href,
      });
    } catch (error) {
      callback({ error, message: error.message, from: 'runTheFunction code' });
    }
    return undefined;
  };
  return (await bluebird.join(browser.executeAsyncScript(
    wrapFunctionWithBabelHelpers(runTheFunction),
    fn.toString(),
    injectable.build()
  )))[0];
}

export default async function processBrowser({ browser, queueItem, scraper }) {
  let data = [];

  try {
    scraper.log(`navigate to ${queueItem.url}`);
    await browser.navigate(queueItem.url);
    scraper.log('ensure promise support');
    await ensurePromises(browser);
    scraper.log('inject jquery');
    await injectJQuery(browser);
    scraper.log('fix jquery click function');
    await fixClickHandlers(browser);
    data = await runWithUtils(browser, scraper[queueItem.method], constructUtils());
    return data;
  } catch (error) {
    scraper.error('BIGERR: An error occurred processing an item', error, 'from url: ', queueItem.url);
    throw error;
  }
}
