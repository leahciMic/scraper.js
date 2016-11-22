#!/usr/bin/env node

import _ from 'lodash/fp';
import debug from 'debug';
import program from 'commander';
import path from 'path';
import promiseEach from 'promise-each-concurrency';
import cheerio from 'cheerio';
import whacko from 'whacko';

import createBrowser from './lib/browser.js';
import getScrapers from './getScrapers.js';
import processItem from './process.js';
import requireES6 from './lib/requireES6.js';
import timeout from './lib/timeout.js';

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

const dataPlugin = requireES6(path.resolve(program.data));
const queuePlugin = requireES6(path.resolve(program.queue));

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
      }, 1000);
    }

    resetFinishTimeout();

    scraperQueue.process(async (queueItem) => {
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

      scraper.log(queue, data);

      let promises = [];

      if (queue && queue.length) {
        promises = _.uniqBy('url')(
          queue
            .map(filterQueueItems)
        )
          .filter(({ url }) => {
            if (!url.match(/:\/\//)) {
              scraper.error('ignoring invalid url queue attempt', url);
              return false;
            }
            return true;
          })
          .map(_queueItem => addToQueue(_queueItem));
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
