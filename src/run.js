#!/usr/bin/env node

const _ = require('lodash/fp');
const path = require('path');
const { RateLimiter } = require('limiter');
const promiseEach = require('promise-each-concurrency');
const createStatsD = require('uber-statsd-client');
const requireES6 = require('./lib/requireES6.js');
const getScrapers = require('./getScrapers.js');
const processItem = require('./process.js');
const timeout = require('./lib/timeout.js');
const log = require('./lib/log.js');
const logger = require('./lib/getLogger');
const urlLogger = require('./lib/urlLogger')();

let sdc;

if (process.env.STATSD_HOST && process.env.STATSD_PORT) {
  sdc = createStatsD({
    prefix: 'scraperjs',
    host: process.env.STATSD_HOST,
    port: process.env.STATSD_PORT,
  });
} else {
  sdc = {
    increment() {},
    decrement() {},
    gauge() {},
    timing() {},
  };
}

const program = require('./lib/parse-cli-options.js');

const dataPlugin = requireES6(path.resolve(program.data));
const { createQueue } = requireES6(path.resolve(program.queue));

const sanitizeName = name => name.replace(/[. ]/g, '-');

function loadScraper(scraper) {
  logger.log({
    level: 'info',
    message: 'Create queue',
    scraper: scraper.name,
  });
  const scraperQueue = createQueue(`scraperjs:${scraper.name}`, { expiry: scraper.timeBetween });

  const addToQueue = (queueItem) => {
    // @todo queueTotal could be wrong, as the queue will not add items that
    // already exist.

    logger.log({
      level: 'debug',
      message: 'Add item to queue',
      scraper: scraper.name,
      url: queueItem.url,
      method: queueItem.method,
    });

    return scraperQueue.add(queueItem);
  };

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
    addStartItem() {
      sdc.increment(`queue.${sanitizeName(scraper.name)}`);
      return addToQueue(filterQueueItems(scraper.start));
    },
    close() {
      logger.log({
        level: 'info',
        message: 'Closed scraper queue',
        scraper: scraper.name,
      });
      scraperQueue.close();
    },
    async processQueueItem(queueItem) {
      let data;

      const startTime = new Date();

      try {
        data = await processItem({ queueItem, scraper });
        sdc.increment(`scrape.${sanitizeName(scraper.name)}`);
      } catch (e) {
        sdc.increment(`error.${sanitizeName(scraper.name)}`);
        console.error('Fatal processItem unhandled error', e);
        console.error(queueItem, scraper);
        throw e;
      } finally {
        sdc.timing(`duration.${sanitizeName(scraper.name)}`, startTime);
      }

      return data;
    },
  };
}

process.on('SIGINT', () => {
  console.log('Shutting down...');
  process.exit();
});

async function startQueue(scraper) {
  const errorRateLimiter = new RateLimiter(10, 'minute');

  const scraperAPI = loadScraper(scraper);

  await scraperAPI.addStartItem();

  await timeout(20);

  let end;
  let finishedTimeout;
  const endedPromise = new Promise((resolve) => {
    end = resolve;
  });

  function resetFinishTimeout() {
    finishedTimeout = setTimeout(() => {
      logger.log({
        level: 'info',
        scraper: scraper.name,
        message: 'Hit finished timeout',
      });
      scraperAPI.close();
      end();
    }, 300);
  }

  scraperAPI.scraperQueue.process(async (queueItem) => {
    try {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      logger.log({
        level: 'verbose',
        message: 'Process queueItem',
        url: queueItem.url,
        method: queueItem.method,
        scraper: scraper.name,
      });

      const { queue, data, finalUrl } = await scraperAPI.processQueueItem(queueItem);

      urlLogger({
        scraper: scraper.name,
        url: queueItem.url,
        finalUrl,
      });

      logger.log({
        level: 'verbose',
        message: 'Finished queueItem',
        url: queueItem.url,
        method: queueItem.method,
        scraper: scraper.name,
      });

      if (queue && queue.length) {
        const refinedQueue = _.uniqBy('url')(queue.map(scraperAPI.filterQueueItems))
          .filter(({ url }) => {
            if (!url.match(/:\/\//)) {
              scraper.error('ignoring invalid url queue attempt', url);
              return false;
            }
            return true;
          });

        logger.log({
          level: 'verbose',
          message: 'Adding queueItems',
          count: refinedQueue.length,
          scraper: scraper.name,
          url: queueItem.url,
          method: queueItem.method,
        });

        for (const qi of refinedQueue) {
          await scraperAPI.addToQueue(qi);
        }
        sdc.increment(`queue.${sanitizeName(scraper.name)}`, refinedQueue.length);
      }

      logger.log({
        level: 'verbose',
        message: 'Saving any data',
        scraper: scraper.name,
        url: queueItem.url,
        method: queueItem.method,
      });

      if (data) {
        const startTime = new Date();
        await dataPlugin({
          url: queueItem.url,
          finalUrl,
          method: queueItem.method,
          scraper: scraper.name,
          timestamp: +new Date(),
          data,
        });
        sdc.timing(`saveDuration.${sanitizeName(scraper.name)}`, startTime);
      }

      resetFinishTimeout();
    } catch (err) {
      logger.log({
        level: 'error',
        message: err.message || 'Error',
        stack: err.stack,
        name: err.name,
        code: err.code,
        scraper: scraper.name,
        url: queueItem.url,
        method: queueItem.method,
      });

      if (!errorRateLimiter.tryRemoveTokens(1)) {
        // eslint-disable-next-line no-param-reassign
        scraper.enabled = false;
        sdc.increment(`errorLimitReached.${sanitizeName(scraper.name)}`);
        logger.log({
          level: 'error',
          message: 'Error rate limit reached, closing queue...',
          scraper: scraper.name,
        });
        clearTimeout(finishedTimeout);
        scraperAPI.close();
        end();
        // @todo probably should not process this queue for awhile...
      }
      sdc.increment(`error.${sanitizeName(scraper.name)}`);
    }
  });

  resetFinishTimeout();
  return endedPromise;
}

async function start() {
  const scrapers = await getScrapers(program.args);

  function* nextScraper() {
    let i = 0;

    while (true) { // eslint-disable-line no-constant-condition
      if (i >= scrapers.length) { i = 0; }
      if (scrapers[i].enabled !== false) {
        yield scrapers[i];
      }
      i += 1;
    }
  }

  await promiseEach(
    nextScraper(),
    async (scraper, threadId) => {
      sdc.increment(`started.${sanitizeName(scraper.name)}`);
      try {
        await startQueue(scraper, threadId);
      } catch (err) {
        scraper.error('BIGERR: A caught error below');
        scraper.error(err);
        scraper.error(err.stack);
        logger.log({
          level: 'error',
          message: err.message || 'Error',
          stack: err.stack,
          name: err.name,
          code: err.code,
          scraper: scraper.name,
        });
      }
    },
    { concurrency: program.concurrency },
  );
}

start()
  .catch((err) => {
    log.error('BIGERR: A caught error', err);
    log.error(err.stack);
    logger.log({
      level: 'error',
      message: err.message || 'Error',
      name: err.name,
      code: err.code,
      stack: err.stack,
    });
  });
