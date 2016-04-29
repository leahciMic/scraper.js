/* eslint-env browser */

import webdriver from 'selenium-webdriver';

// const { By, until } = webdriver;

const getNewBrowser = () => webdriver.promise.createFlow(controlFlow => new webdriver.Builder()
  .setControlFlow(controlFlow)
  .forBrowser(process.env.HEADLESS ? 'phantomjs' : 'chrome')
  .build());

class Browser {
  constructor(driver) {
    this.driver = driver;
    driver.manage().timeouts().setScriptTimeout(45 * 1000);
  }
  navigate(url) {
    this._currentUrl = url;
    return this.driver.get(url);
  }
  executeScript(script) {
    return this.driver.executeScript(script);
  }
  executeAsyncScript(...args) {
    return this.driver.executeAsyncScript(...args);
  }
  quit() {
    this.driver.quit();
  }
}

export default () => getNewBrowser().then(driver => new Browser(driver));
