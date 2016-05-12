import webdriver from 'selenium-webdriver';
import getSourceForModule from './getSourceForModule.js';
import wrapFunctionWithBabelHelpers from './wrapFunctionWithBabelHelpers.js';

// const { By, until } = webdriver;

const getNewBrowser = () => new Promise((resolve) => {
  webdriver.promise.createFlow(() => {
    const driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
    resolve(driver);
  });
});

class Browser {
  constructor(driver) {
    this.driver = driver;
  }
  navigate(url) {
    this.driver.get(url);
  }
  injectJQuery() {
    this.driver.executeScript(getSourceForModule('jquery'));
  }
  runInContextOfJquery(origFn) {
    const fn = wrapFunctionWithBabelHelpers(origFn);

    const runTheFunction = (userFnStr, callback) => {
      const queueItems = [];
      const dataItems = [];

      const fnFromString = (fnStr) => {
        const [, args, body] = fnStr.match(/^function[^(]*\(([^)]*)\) {((?:.|\s)*)}$/);
        return new Function(args.split(','), body); // eslint-disable-line no-new-func
      };

      const context = {
        queue: (...args) => {
          queueItems.push(args);
        },
        data: (...args) => {
          dataItems.push(args);
        },
      };

      fnFromString(userFnStr).call(context, jQuery); // eslint-disable-line no-undef

      callback({
        queue: queueItems,
        data: dataItems,
        url: window.location.href,
      });
    };

    return this.driver.executeAsyncScript(wrapFunctionWithBabelHelpers(runTheFunction), fn.toString());
  }
  quit() {
    this.driver.quit();
  }
}

export default () => getNewBrowser().then(driver => new Browser(driver));

// getNewBrowser().then((driver) => {
//   const b = new Browser(driver);
//   b.navigate('https://en.wikipedia.org/wiki/Dystopia');
//   b.injectJQuery();
//   b.runInContextOfJquery(function run() {
//     this.queue('blah', 'blah');
//   });
//   b.quit();
// });
