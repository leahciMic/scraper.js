/* eslint-env browser */

const puppeteer = require('puppeteer');

const browserPromise = puppeteer.launch({ headless: false });

const getNewBrowser = async () => {
  const browser = await browserPromise;
  return await browser.newPage();
};

class Browser {
  constructor(page) {
    this.page = page;
    // @todo expose these events...
    this.page.on('error', (err) => {
      console.error('Error', err);
    });
    this.page.on('pageerror', (err) => {
      console.error('Page error:', err);
    });
    this.page.on('console', (...args) => {
      console.log('log', ...args);
    });
  }
  navigate(url) {
    this._currentUrl = url;
    return this.page.goto(url);
  }
  evaluate(...args) {
    return this.page.evaluate(...args);
  }
  quit() {
    this.page.close();
  }
}

module.exports = () => getNewBrowser().then(page => new Browser(page));
