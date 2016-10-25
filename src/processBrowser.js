/* globals bot */
/* eslint-disable no-underscore-dangle */

import _ from 'lodash';
import fs from 'fs';
import bluebird from 'bluebird';
import path from 'path';

import wrapFunctionWithBabelHelpers from './lib/wrapFunctionWithBabelHelpers.js';
import Injectable from './lib/Injectable.js';
import queueUtil from './lib/queue-util.js';
import dataUtil from './lib/data-util.js';
import within from './lib/within.js';
import during from './lib/during.js';

const atomsSrc = fs.readFileSync(path.join(__dirname, './lib/atoms.js'), 'utf8');

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
  await browser.executeScript(
    `
      var _old$ = window.$;
      var _oldjQuery = window.jQuery;
      ${getSourceForModule('jquery')};
      window.__SCRAPERJS_JQUERY = window.jQuery;
      window.$ = _old$;
      window.jQuery = _oldjQuery;
    `
  );
}

async function injectAtoms(browser) {
  await browser.executeScript(`${atomsSrc}; window.bot = bot;`);
}

async function fixClickHandlers(browser) {
  await browser.executeScript(() => {
    window.__SCRAPERJS_JQUERY.fn.extend({ // eslint-disable-line no-underscore-dangle
      click() {
        bot.action.click(this.get(0));
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

async function addToolsToBrowser(browser, log) {
  log('ensure promise support');
  await ensurePromises(browser);
  log('inject jquery');
  await injectJQuery(browser);
  log('inject atoms');
  await injectAtoms(browser);
  log('fix jquery click function');
  await fixClickHandlers(browser);
}

export default async function processBrowser({ browser, queueItem, scraper }) {
  let data = [];

  scraper.log(`navigate to ${queueItem.url}`);
  await browser.navigate(queueItem.url);

  try {
    await addToolsToBrowser(browser, scraper.log);
    data = await runWithUtils(browser, scraper[queueItem.method], constructUtils());
    return data;
  } catch (err) {
    if (err.toString().match(/Document was unloaded during execution/)) {
      scraper.log('retry');
      // page was probably redirected... lets try again?
      try {
        await addToolsToBrowser(browser, scraper.log);
        await browser.executeAsyncScript((callback) => {
          if (document.readyState === 'complete') {
            callback();
          } else {
            window.__SCRAPERJS_JQUERY(window).on('load', () => {
              callback();
            });
          }
        });
        data = await runWithUtils(browser, scraper[queueItem.method], constructUtils());
        return data;
      } catch (errs) {
        scraper.error('BIGERR: An error occurred processing an item', errs, 'from url: ', queueItem.url);
        throw errs;
      }
    }
    scraper.error('BIGERR: An error occurred processing an item', err, 'from url: ', queueItem.url);
    throw err;
  }
}
