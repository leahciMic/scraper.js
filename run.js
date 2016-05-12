import _ from 'lodash/fp';
import fs from 'fs';
import createBrowser from './lib/browser.js';
import sha256 from './lib/sha256.js';
import debug from 'debug';
import getScrapers from './getScrapers.js';
import processItem from './processItem.js';
import createQueue from 'bull';
import bluebird from 'bluebird';
import cacheManager from 'cache-manager';
import redisStore from 'cache-manager-redis';

const redisCache = cacheManager.caching({
  store: redisStore,
  db: 0,
  ttl: 86400,
});

bluebird.promisifyAll(redisCache);
bluebird.promisifyAll(fs);

function startQueue(scraper) {
  const scraperLog = debug(`scraperjs:${scraper.name}`);
  const scraperQueue = createQueue(`scraperjs:${scraper.name}`);

  scraperLog('queue starting');

  scraper.on('data', (data) => {
    console.log('TODO we should be saving DATA!!!', data);
  });

  scraper.on('queue', (queueItem) => {
    const urlHash = sha256(queueItem.url);

    scraperLog('adding ', queueItem);

    redisCache.getAsync(urlHash).then((timestamp) => {
      if (timestamp === null) {
        scraperLog('did add item!');
        scraperQueue.add({
          url: queueItem.url,
          method: queueItem.method,
        });
      } else {
        scraperLog('item already in queue');
      }
      // update TTL ?
      redisCache.set(urlHash, +new Date(), scraper.timeBetween);
    });
  });

  scraper.start();

  createBrowser().then((browser) => {
    scraperLog('Started browser');
    scraperQueue.process((job) => {
      const queueItem = job.data;
      scraperLog('Got a job to do!', queueItem, scraper[queueItem.method]);
      return processItem(
        browser,
        queueItem.url,
        scraper[queueItem.method]
      ).then(({ queue, data }) => {
        scraperLog('processItem finished');
        const promises = [
          queue.map(args => scraper.queue(...args)),
        ];
        if (data.length) {
          promises.push(scraper.data({
            url: queueItem.url,
            method: queueItem.method,
            timestamp: +new Date(),
            data: data.length === 1 ? data[0][0] : data.map(x => x[0]),
          }));
        }
        return bluebird.all(promises);
      });
    });
  });
}

getScrapers().then(_.forEach(startQueue));
