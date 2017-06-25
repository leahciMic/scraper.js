#!/usr/bin/env node

const _ = require('lodash/fp');
const debug = require('debug');
const program = require('commander');
const path = require('path');
const promiseEach = require('promise-each-concurrency');
const cheerio = require('cheerio');
const whacko = require('whacko');

const createBrowser = require('./lib/browser.js');
const getScrapers = require('./getScrapers.js');
const processItem = require('./process.js');
const timeout = require('./lib/timeout.js');

const log = debug('scraperjs:log');
log.error = debug('scraperjs:error');
log.warn = debug('scraperjs:warn');

function parseConcurrency(istr) {
  return +istr;
}

program
  .version(require('../package.json').version)
  .option('-q, --queue <file>', 'Use this queue plugin [memory]')
  .option('-d, --data <file>', 'Use this data plugin')
  .option('-c, --concurrency <number>', 'How many browser instances to use', parseConcurrency, 1)
  .parse(process.argv);

if (!program.queue || !program.data) {
  program.help();
}

const dataPlugin = path.resolve(program.data);
const queuePlugin = path.resolve(program.queue);

function startQueue(scraper) {
  return new Promise(async function processQueue(resolve) {
    let browser;

    const scraperQueue = queuePlugin(`scraperjs:${scraper.name}`);

    // @todo maybe the scraper queue should be instantiated with expiry
    const addToQueue = queueItem => scraperQueue.add(
      _.assign({ expiry: scraper.timeBetween }, queueItem)
    );

    const filterQueueItems = (queueItem) => {
      if (scraper.filterQueueItem) {
        // eslint-disable-next-line no-param-reassign
        queueItem.url = scraper.filterQueueItem(queueItem);
      }
      return queueItem;
    };

    scraper.log('Add start item to the queue');
    await addToQueue(filterQueueItems(scraper.start));

    scraper.log('Waiting for 1 seconds');
    await timeout(1000);

    let finishedTimeout;

    function resetFinishTimeout() {
      finishedTimeout = setTimeout(() => {
        console.log('no work in 5 seconds, quitting');
        scraperQueue.close();
        if (browser) {
          browser.quit();
        }
        resolve();
      }, 5000);
    }

    resetFinishTimeout();

    scraperQueue.process({ rateLimit: scraper.rateLimit }, async (queueItem) => {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      scraper.log('process', queueItem.url);

      if ((queueItem.use || scraper.use || 'browser') === 'browser' && !browser) {
        scraper.log('starting browser');
        browser = await createBrowser();
      }

      const { queue, data, finalUrl } = await processItem({
        browser,
        queueItem,
        scraper,
        cheerio,
        whacko,
      })
        .catch((err) => {
          scraper.error('error processing item', err);
          throw err;
        });

      scraper.log('finished', queueItem.url);
      // scraper.debug(queue, data);

      let promises = [];

      if (queue && queue.length) {
        try {
          promises = _.uniqBy('url')(queue.map(filterQueueItems))
            .filter(({ url }) => {
              if (!url.match(/:\/\//)) {
                scraper.error('ignoring invalid url queue attempt', url);
                return false;
              }
              return true;
            })
            .map(_queueItem => addToQueue(_queueItem));
        } catch (error) {
          scraper.error('an error occured in filterQueueItem');
          scraper.error(error);
          throw error;
        }
      }

      if (data) {
        promises.push(dataPlugin({
          url: queueItem.url,
          finalUrl,
          method: queueItem.method,
          scraper: scraper.name,
          timestamp: +new Date(),
          data,
        }));
      }
      await Promise.all(promises);
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
