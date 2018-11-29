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
const statusServer = require('./lib/statusServer');
const logger = require('./lib/getLogger');

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

const threads = Array(program.concurrency).fill(undefined).map((_ignore, key) => ({
  id: key,
  status: 'Idle',
  pages: 0,
  startTime: Date.now(),
  lastStatus: Date.now(),
  scraper: 'Unknown',
  logs: [],
  log(...args) {
    this.logs.push(args);
  },
  update(type, value) {
    this[type] = value;

    statusServer.update({
      threads: {
        [this.id]: {
          [type]: value,
        },
      },
    });
  },
  updateStatus(status) {
    this.update('status', status);
    this.update('lastStatus', Date.now());
  },
  addPages(increment = 1) {
    this.update('pages', this.pages += increment);
  },
  updateScraper(scraper) {
    this.update('scraper', scraper);
  },
}));

statusServer.on('sync', (send) => {
  const obj = {
    threads: {},
  };

  threads.forEach((value, id) => {
    obj.threads[id] = {
      status: value.status,
      lastStatus: value.lastStatus,
      pages: value.pages,
      scraper: value.scraper,
    };
  });

  send(JSON.stringify({
    type: 'SYNC',
    data: obj,
  }));
});

const dataPlugin = requireES6(path.resolve(program.data));
const { createQueue } = requireES6(path.resolve(program.queue));

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
    sdc.increment(`queue.${scraper.name.replace(/\./g, '-')}`);

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
        sdc.increment(`scrape.${scraper.name.replace(/\./g, '-')}`);
      } catch (e) {
        sdc.increment(`error.${scraper.name.replace(/\./g, '-')}`);
        console.error('Fatal processItem unhandled error', e);
        console.error(queueItem, scraper);
        throw e;
      } finally {
        sdc.timing(`duration.${scraper.name.replace(/\./g, '-')}`, startTime);
      }

      return data;
    },
  };
}

process.on('SIGINT', () => {
  console.log('Shutting down...');
  process.exit();
});

async function startQueue(scraper, threadId) {
  const thread = threads[threadId];

  thread.updateScraper(scraper.name);

  const errorRateLimiter = new RateLimiter(10, 'minute');

  // scraper.log.verbose('Start with ', thread.id);

  const scraperAPI = loadScraper(scraper);

  // scraper.log.verbose('Add start item to the queue');
  await scraperAPI.addStartItem();

  // scraper.log.verbose('Waiting for 20ms');
  await timeout(20);

  let end;
  let finishedTimeout;
  const endedPromise = new Promise((resolve) => {
    end = resolve;
  });

  function resetFinishTimeout() {
    finishedTimeout = setTimeout(() => {
      // scraper.log.verbose('hit finishedTimeout');
      scraperAPI.close();
      end();
    }, 20);
  }

  thread.updateStatus('Waiting for items');

  scraperAPI.scraperQueue.process(async (queueItem) => {
    try {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      thread.updateStatus(`Process ${queueItem.url}`);
      scraper.log('process', queueItem.url);

      logger.log({
        level: 'verbose',
        message: 'Process queueItem',
        url: queueItem.url,
        method: queueItem.method,
        scraper: scraper.name,
      });

      const { queue, data, finalUrl } = await scraperAPI.processQueueItem(queueItem);

      scraper.log('finished', queueItem.url);
      logger.log({
        level: 'verbose',
        message: 'Finished queueItem',
        url: queueItem.url,
        method: queueItem.method,
        scraper: scraper.name,
      });

      // let promises = [];

      if (queue && queue.length) {
        const refinedQueue = _.uniqBy('url')(queue.map(scraperAPI.filterQueueItems))
          .filter(({ url }) => {
            if (!url.match(/:\/\//)) {
              scraper.error('ignoring invalid url queue attempt', url);
              return false;
            }
            return true;
          });

        thread.updateStatus(`Adding ${refinedQueue.length} queue items`);
        scraper.log(`Adding ${refinedQueue.length} queue items`);

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
      } else {
        scraper.log('0 items to queue');
      }

      scraper.log('Done');

      logger.log({
        level: 'verbose',
        message: 'Saving any data',
        scraper: scraper.name,
        url: queueItem.url,
        method: queueItem.method,
      });

      if (data) {
        if (Array.isArray(data)) {
          scraper.log(`Data ${data.length} items`);
        } else {
          const keys = Object.keys(data).reduce(
            (prev, curr) => `${prev} ${curr}: ${typeof data[curr] === 'string' ? data[curr].length : ''}`,
            '',
          );
          scraper.log(`Data${keys}`);
        }

        scraper.log({ name: data.name, price: data.price });
        const startTime = new Date();
        thread.updateStatus('Saving data');
        await dataPlugin({
          url: queueItem.url,
          finalUrl,
          method: queueItem.method,
          scraper: scraper.name,
          timestamp: +new Date(),
          data,
        });
        sdc.timing(`saveDuration.${scraper.name.replace(/\./g, '-')}`, startTime);
      } else {
        scraper.log('No data received');
      }

      thread.updateStatus(`Finished ${queueItem.url}`);
      thread.addPages();

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
        sdc.increment(`errorLimitReached.${scraper.name.replace(/\./g, '-')}`);
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
      sdc.increment(`error.${scraper.name.replace(/\./g, '-')}`);
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
      // log('nextScraper', i);
      yield scrapers[i];
      i += 1;
    }
  }

  await promiseEach(
    nextScraper(),
    async (scraper, threadId) => {
      sdc.increment(`started.${scraper.name.replace(/\./g, '-')}`);
      // scraper.log.verbose('start processing queue');
      try {
        const result = await startQueue(scraper, threadId);
        // scraper.log.verbose('finished processing queue');
        return result;
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
