const puppeteer = require('puppeteer');
const genericPool = require('generic-pool');

class Browser {
  constructor(page) {
    this.page = page;
    // this.page.on('error', console.error.bind(console));
    // this.page.on('pageerror', console.error.bind(console));
    // this.page.on('console', console.log.bind(console));
  }
  goto(url) {
    return this.page.goto(url);
  }
  evaluate(...args) {
    return this.page.evaluate(...args);
  }
  close() {
    return this.page.close();
  }
}
const launchBrowser = () => puppeteer.launch({
  headless: process.env.HEADLESS,
  ignoreHTTPSErrors: true,
});

const instantiatePool = async ({ min, max }) => {
  const browser = await launchBrowser();

  const factory = {
    async create() {
      // hopefully we can catch the errors here, and launch a new browser.
      const page = await browser.newPage();

      // this currently causes a lot of chrome crashes

      // await page.setRequestInterceptionEnabled(true);

      // page.on('request', async (interceptedRequest) => {
      //   try {
      //     if (interceptedRequest.url.match(/\.(png|jpg|mp4|gif)$/)) {
      //       await interceptedRequest.abort();
      //     } else {
      //       await interceptedRequest.continue();
      //     }
      //   } catch (e) {
      //     console.log('could not intercept request', e);
      //   }
      // });

      return new Browser(page);
    },
    destroy() {
      return browser.close();
    },
  };

  const pool = genericPool.createPool(factory, { min, max });

  pool.kill = async () => {
    try {
      console.log('draining client connections');
      await pool.drain();
      console.log('closing browser');
      await browser.close();
    } catch(e) {
      console.log('error killing', e);
    }
  };

  return pool;
};

module.exports = instantiatePool;
