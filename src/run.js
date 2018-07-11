#!/usr/bin/env node

const _ = require('lodash/fp');
const path = require('path');
const promiseEach = require('promise-each-concurrency');
const createStatsD = require('uber-statsd-client');
const requireES6 = require('./lib/requireES6.js');
const getScrapers = require('./getScrapers.js');
const processItem = require('./process.js');
const timeout = require('./lib/timeout.js');
const log = require('./lib/log.js');
const statusServer = require('./lib/statusServer');

let sdc;

if (process.env.STATSD) {
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
  const scraperQueue = createQueue(`scraperjs:${scraper.name}`, { expiry: scraper.timeBetween });

  const addToQueue = (queueItem) => {
    // @todo queueTotal could be wrong, as the queue will not add items that
    // already exist.
    sdc.increment(`queued.${scraper.name.replace('.', '-')}.count`);
    sdc.increment(`queueTotal.${scraper.name}`);
    sdc.increment(`queueItems.${scraper.name}`);

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
      scraperQueue.close();
    },
    async processQueueItem(queueItem) {
      let data;

      sdc.decrement(`queueItems.${scraper.name}.count`);
      const startTime = new Date();

      try {
        data = await processItem({ queueItem, scraper });
        sdc.increment(`processItem.${scraper.name}`);
        sdc.increment(`processed.${scraper.name.replace('.', '-')}.count`);
      } catch (e) {
        sdc.increment(`processItemFail.${scraper.name}`);
        sdc.increment(`failed.${scraper.name.replace('.', '-')}.count`);
        console.error('Fatal processItem unhandled error', e);
        console.error(queueItem, scraper);
        throw e;
      } finally {
        sdc.timing(`processItemTime.${scraper.name.replace('.', '-')}`, startTime);
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
    if (finishedTimeout) {
      clearTimeout(finishedTimeout);
      finishedTimeout = undefined;
    }

    thread.updateStatus(`Process ${queueItem.url}`);
    scraper.log('process', queueItem.url);

    // wrap this and catch errors!
    const { queue, data, finalUrl } = await scraperAPI.processQueueItem(queueItem);

    scraper.log('finished', queueItem.url);

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
      // screen.render();

      for (const qi of refinedQueue) {
        await scraperAPI.addToQueue(qi);
      }
    } else {
      scraper.log('0 items to queue');
      // screen.render();
    }

    scraper.log('Done');

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
      sdc.timing(`dataSaveTime.${scraper.name.replace('.', '-')}`, startTime);
    } else {
      scraper.log('No data received');
    }

    thread.updateStatus(`Finished ${queueItem.url}`);
    thread.addPages();

    resetFinishTimeout();
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
      // scraper.log.verbose('start processing queue');
      try {
        const result = await startQueue(scraper, threadId);
        // scraper.log.verbose('finished processing queue');
        return result;
      } catch (error) {
        scraper.error('BIGERR: A caught error below');
        scraper.error(error);
        scraper.error(error.stack);
      }
    },
    { concurrency: program.concurrency },
  );
}

start()
  .catch((error) => {
    log.error('BIGERR: A caught error', error);
    log.error(error.stack);
  });
