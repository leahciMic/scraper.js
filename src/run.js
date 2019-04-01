#!/usr/bin/env node

const nanoid = require('nanoid/non-secure');
const _ = require('lodash/fp');
const path = require('path');
const { RateLimiter } = require('limiter');
const promiseEach = require('promise-each-concurrency');
const createStatsD = require('uber-statsd-client');
const requireES6 = require('./lib/requireES6.js');
const getScrapers = require('./getScrapers.js');
const processItem = require('./process.js');
const timeout = require('./lib/timeout.js');
const baseLog = require('./lib/log.js');

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

function loadScraper(scraper, log) {
  log.info('open queue');
  const scraperQueue = createQueue(`scraperjs:${scraper.name}`, { expiry: scraper.timeBetween });

  const addToQueue = (queueItem, taskLog) => {
    taskLog.trace({ queueItem }, 'queue');
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
    addStartItem(taskLog) {
      sdc.increment(`queue.${sanitizeName(scraper.name)}`);
      return addToQueue(filterQueueItems(scraper.start), taskLog || log);
    },
    close() {
      log.info('close queue');
      scraperQueue.close();
    },
    async processQueueItem(queueItem, taskLog) {
      let data;

      const startTime = new Date();

      try {
        data = await processItem({ queueItem, scraper, log: taskLog });
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

async function startQueue(scraper, log) {
  const errorRateLimiter = new RateLimiter(10, 'minute');

  const scraperAPI = loadScraper(scraper, log);

  await scraperAPI.addStartItem(log);

  await timeout(20);

  let end;
  let finishedTimeout;
  const endedPromise = new Promise((resolve) => {
    end = resolve;
  });

  function resetFinishTimeout() {
    finishedTimeout = setTimeout(() => {
      log.info('timeout waiting for job');
      scraperAPI.close();
      end();
    }, 300);
  }

  scraperAPI.scraperQueue.process(async (queueItem) => {
    const taskLog = log.child({
      taskId: nanoid(),
    });
    try {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      taskLog.info({ queueItem }, 'process queueItem');
      const { queue, data, finalUrl } = await scraperAPI.processQueueItem(queueItem, taskLog);
      taskLog.info('finished processing');

      if (queue && queue.length) {
        const refinedQueue = _.uniqBy('url')(queue.map(scraperAPI.filterQueueItems))
          .filter(({ url }) => {
            if (!url.match(/:\/\//)) {
              scraper.error('ignoring invalid url queue attempt', url);
              return false;
            }
            return true;
          });

        taskLog.info({ count: refinedQueue.length }, 'queue tasks');

        for (const qi of refinedQueue) {
          await scraperAPI.addToQueue(qi, taskLog);
        }

        taskLog.info('queued tasks');
        sdc.increment(`queue.${sanitizeName(scraper.name)}`, refinedQueue.length);
      }
      if (data) {
        taskLog.info('save data');
        const startTime = new Date();
        await dataPlugin({
          url: queueItem.url,
          finalUrl,
          method: queueItem.method,
          scraper: scraper.name,
          timestamp: +new Date(),
          data,
        });
        taskLog.info('saved data');
        sdc.timing(`saveDuration.${sanitizeName(scraper.name)}`, startTime);
      }

      resetFinishTimeout();
    } catch (err) {
      taskLog.error(err);

      if (!errorRateLimiter.tryRemoveTokens(1)) {
        // eslint-disable-next-line no-param-reassign
        scraper.enabled = false;
        sdc.increment(`errorLimitReached.${sanitizeName(scraper.name)}`);
        log.error('scraper had too many errors');
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
      const log = baseLog.child({
        scraper: scraper.name,
        threadId: nanoid(22),
      });

      try {
        await startQueue(scraper, log);
      } catch (err) {
        log.error(err);
      }
    },
    { concurrency: program.concurrency },
  );
}

start()
  .catch((err) => {
    baseLog.error('BIGERR: A caught error', err);
  });
