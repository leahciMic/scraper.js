#!/usr/bin/env node

const _ = require('lodash/fp');
const path = require('path');
const promiseEach = require('promise-each-concurrency');
const cheerio = require('cheerio');
const blessed = require('blessed');
const requireES6 = require('./lib/requireES6.js');
const shortenUrl = require('./lib/shortenUrl.js');
const createBrowser = require('./lib/browser.js');
const getScrapers = require('./getScrapers.js');
const processItem = require('./process.js');
const timeout = require('./lib/timeout.js');
const log = require('./lib/log.js');

// const style = require('./style.js');
// const { screen, layout } = require('./lib/createScreenLayout.js')(style);

const program = require('./lib/parse-cli-options.js');

const dataPlugin = requireES6(path.resolve(program.data));
const { createQueue } = requireES6(path.resolve(program.queue));

function createQueueLayout({ style, name }) {
  const queueLayout = blessed.layout({
    width: 60,
    height: 8,
    border: 'line',
    style,
  });

  const logScroll = blessed.log({
    width: queueLayout.width - 2,
    height: 5,
    scrollback: 50,
    style,
  });

  queueLayout.append(blessed.text({
    width: queueLayout.width - 2,
    height: 1,
    content: name,
    style,
  }));

  queueLayout.append(logScroll);

  return { queueLayout, logScroll };
}

function loadScraper(scraper) {
  const scraperQueue = createQueue(`scraperjs:${scraper.name}`);
  const addToQueue = queueItem => scraperQueue.add(
    _.assign({ expiry: scraper.timeBetween }, queueItem),
  );
  const filterQueueItems = (queueItem) => {
    if (scraper.filterQueueItem) {
      // eslint-disable-next-line no-param-reassign
      queueItem.url = scraper.filterQueueItem(queueItem);
    }
    return queueItem;
  };

  return {
    scraperQueue,
    filterQueueItems,
    addToQueue,
    browser: undefined,
    addStartItem() {
      return addToQueue(filterQueueItems(scraper.start));
    },
    close() {
      scraperQueue.close();
      if (this.browser) {
        this.browser.quit();
      }
    },
    async createBrowser() {
      this.browser = await createBrowser();
    },
    quitBrowser() {
      return this.browser.quit();
    },
    async processQueueItem(queueItem) {
      if ((queueItem.use || scraper.use || 'browser') === 'browser' && !this.browser) {
        this.browser = await createBrowser();
      }

      const { queue, data, finalUrl } = await processItem({
        browser: this.browser,
        queueItem,
        scraper,
        cheerio,
      });

      return { queue, data, finalUrl };
    },
  };
}

function startQueue(scraper) {
  // const { queueLayout, logScroll } = createQueueLayout({ name: scraper.name, style });
  // layout.append(queueLayout);
  // screen.render();

  return new Promise(async (resolve) => {
    const scraperAPI = loadScraper(scraper);

    scraper.log('Add start item to the queue');
    await scraperAPI.addStartItem();

    scraper.log('Waiting for 1 seconds');
    await timeout(1000);

    let finishedTimeout;

    function resetFinishTimeout() {
      finishedTimeout = setTimeout(() => {
        scraperAPI.close();
        // queueLayout.destroy();
        // screen.render();
        resolve();
      }, 5000);
    }

    resetFinishTimeout();

    scraperAPI.scraperQueue.process(async (queueItem) => {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      scraper.log('process', queueItem.url);
      // logScroll.log(shortenUrl(queueItem.url, logScroll.width));
      // screen.render();

      const { queue, data, finalUrl } = await scraperAPI.processQueueItem(queueItem);
      scraper.log('finished', queueItem.url);

      let promises = [];

      if (queue && queue.length) {
        const refinedQueue = _.uniqBy('url')(queue.map(scraperAPI.filterQueueItems))
          .filter(({ url }) => {
            if (!url.match(/:\/\//)) {
              scraper.error('ignoring invalid url queue attempt', url);
              return false;
            }
            return true;
          });

        // logScroll.log(`Adding ${refinedQueue.length} queue items`);
        // screen.render();

        try {
          promises = refinedQueue
            .map(_queueItem => scraperAPI.addToQueue(_queueItem));
        } catch (error) {
          scraper.error('an error occured in filterQueueItem');
          scraper.error(error);
          throw error;
        }

        await Promise.all(promises);
      } else {
        // logScroll.log('0 items to queue');
        // screen.render();
      }

      if (data) {
        if (Array.isArray(data)) {
          // logScroll.log(`Data ${data.length} items`);
          // screen.render();
        } else {
          const keys = Object.keys(data).reduce(
            (prev, curr) => `${prev} ${curr}: ${data[curr].length}`,
            '',
          );
          // logScroll.log(`Data${keys}`);
          // screen.render();
        }

        await dataPlugin({
          url: queueItem.url,
          finalUrl,
          method: queueItem.method,
          scraper: scraper.name,
          timestamp: +new Date(),
          data,
        });
      } else {
        // logScroll.log('No data received');
        // screen.render();
      }

      resetFinishTimeout();
    });
  });
}

async function start() {
  const scrapers = await getScrapers(program.args);

  function* nextScraper() {
    let i = 0;

    while (true) { // eslint-disable-line no-constant-condition
      if (i >= scrapers.length) { i = 0; }
      log('nextScraper', i);
      yield scrapers[i];
      i += 1;
    }
  }

  await promiseEach(
    nextScraper(),
    async (scraper) => {
      scraper.log('start processing queue');
      try {
        const result = await startQueue(scraper);
        scraper.log('finished processing queue');
        return result;
      } catch (error) {
        scraper.error('BIGERR: A caught error below');
        scraper.error(error);
        scraper.error(error.stack);
      }
    },
    { concurrency: program.concurrency }
  );
}

start()
  .catch((error) => {
    log.error('BIGERR: A caught error', error);
    log.error(error.stack);
  });
