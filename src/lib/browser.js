/* eslint-env browser */

import webdriver from 'selenium-webdriver';
import bluebird from 'bluebird';

// const { By, until } = webdriver;

const getNewBrowser = () => webdriver.promise.createFlow(controlFlow => new webdriver.Builder()
  .setControlFlow(controlFlow)
  .forBrowser(process.env.HEADLESS ? 'phantomjs' : process.env.BROWSER || 'chrome')
  .build());

class Browser {
  constructor(driver) {
    this.driver = driver;
    // @todo make this configurable, 15 minutes is too long for most things,
    // and probably not enough for all use cases.
    driver.manage().timeouts().setScriptTimeout(15 * 60 * 1000);
  }
  navigate(url) {
    this._currentUrl = url;
    return bluebird.join(this.driver.get(url));
  }
  executeScript(script) {
    return bluebird.join(this.driver.executeScript(script));
  }
  executeAsyncScript(...args) {
    return bluebird.join(this.driver.executeAsyncScript(...args));
  }
  quit() {
    this.driver.quit();
  }
}

export default () => getNewBrowser().then(driver => new Browser(driver));
