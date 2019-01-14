const puppeteer = require('puppeteer');
const genericPool = require('generic-pool');
const { PNG } = require('pngjs');

class Browser {
  constructor(page) {
    this.page = page;
    page.setViewport({
      width: 1280,
      height: 800,
    });
    // this.page.on('error', console.error.bind(console));
    // this.page.on('pageerror', console.error.bind(console));
    // this.page.on('console', console.log.bind(console));
  }

  setContent(html) {
    return this.page.setContent(html);
  }

  async screenshot(options) {
    for (let attempt = 0; attempt < 100; attempt += 1) {
      // eslint-disable-next-line no-await-in-loop
      const screenshot = await this.page.screenshot(options);
      const png = new PNG();
      // eslint-disable-next-line no-await-in-loop
      const isAllSameColour = await new Promise((resolve, reject) => {
        png.parse(screenshot, (err, { data, width, height }) => {
          if (err) {
            reject(err);
            return;
          }
          for (let i = 0; i < data.length; i += 1) {
            const y = Math.floor(i / 3 / width);
            const x = (Math.floor(i / 4) % width) + 1;
            const isScrollbar = x > width - 50 || y > height - 50;

            if (!isScrollbar && data[i] !== data[i % 4]) {
              resolve(false);
              break;
            }
          }
          resolve(true);
        });
      });
      if (!isAllSameColour) {
        return screenshot;
      }
    }
    throw new Error('Could not get screenshot');
  }

  async goto(url) {
    await this.page.goto(url, {
      timeout: 60 * 1000, // 1 minute is a long time, but heh.
    });

    const defaultViewport = {
      height: 1920,
      width: 1280,
    };

    // const bodyHandle = await this.page.$('body');
    // const boundingBox = await bodyHandle.boundingBox();

    // const newViewport = {
    //   width: Math.max(defaultViewport.width, Math.ceil(boundingBox.width)),
    //   height: Math.max(defaultViewport.height, Math.ceil(boundingBox.height)),
    // };

    await this.page.setViewport(defaultViewport);
  }

  waitForNavigation(...args) {
    return this.page.waitForNavigation(...args);
  }

  evaluate(...args) {
    return this.page.evaluate(...args);
  }

  close() {
    return this.page.close();
  }
}

const launchBrowser = () => puppeteer.launch({
  headless: process.env.HEADLESS === 'true',
  devtools: process.env.DEVTOOLS,
  ignoreHTTPSErrors: true,
  args: [
    '--disable-notifications',
  ],
});

const instantiatePool = async ({ min, max }) => {
  const browser = await launchBrowser();
  let isFirst = true;

  const factory = {
    async create() {
      // hopefully we can catch the errors here, and launch a new browser.

      let page;
      if (isFirst) {
        isFirst = false;
        [page] = await browser.pages();
      }

      page = await browser.newPage();

      const userAgent = await browser.userAgent();

      page.setUserAgent(userAgent.replace('HeadlessChrome', 'Chrome'));

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
    } catch (e) {
      console.log('error killing', e);
    }
  };

  return pool;
};

module.exports = instantiatePool;
