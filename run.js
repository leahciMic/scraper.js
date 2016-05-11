import bluebird from 'bluebird';
import _ from 'lodash/fp';
import fs from 'fs';
import createBrowser from './lib/browser.js';
import sha256 from './lib/sha256.js';
import debug from 'debug';
import lruCache from 'lru-cache';
import getScrapers from './getScrapers.js';
import processItem from './processItem.js';
import Firebase from 'firebase';
import FirebaseQueue from 'firebase-queue';
const rootRef = new Firebase(process.env.FIREBASE_URL);

const urlCache = lruCache(200000);

bluebird.promisifyAll(fs);

function startQueue(scraper) {
  const scraperLog = debug(`scraperjs:${scraper.name}`);
  scraperLog('queue starting');
  const queueRef = rootRef.child(scraper.name);
  const dataRef = rootRef.child(scraper.name).child('data');

  // oh we probably need to index this data by url, so how are we going to get that property?
  scraper.on('data', (data) => {
    dataRef.push(data);
  });

  scraper.on('queue', (queueItem) => {
    const urlHash = sha256(queueItem.url);
    const cacheResult = urlCache.get(urlHash);

    const addQueueItem = (timestamp) => {
      if (+new Date() > timestamp + scraper.timeBetween) {
        urlCache.set(urlHash, +new Date());
        queueRef.child('lastAdded').child(urlHash).set(Firebase.ServerValue.TIMESTAMP);
        scraperLog('Added to queue', queueItem);
        queueRef.child('tasks').push(queueItem);
      } else {
        urlCache.set(urlHash, timestamp);
      }
    };

    if (cacheResult === undefined) {
      scraperLog('Cache miss!', queueItem.url);
      queueRef.child('lastAdded').child(urlHash).once('value', (ref) => {
        addQueueItem(ref.val() || 0);
      });
    } else {
      addQueueItem(cacheResult);
    }
  });

  scraper.start();

  createBrowser().then((browser) => {
    scraperLog('Started browser');
    // other args are progress, resolve, reject
    // scraperLog('Processing item from queue', queueItem.url, queueItem.method);
    // eslint-disable-next-line no-unused-vars
    const queueManager = new FirebaseQueue(queueRef, (queueItem, progress, resolve) => {
      processItem(browser, queueItem.url, scraper[queueItem.method])
        .then(({ queue, data }) => {
          queue.forEach(args => scraper.queue(...args));
          if (data.length) {
            scraper.data({
              url: queueItem.url,
              method: queueItem.method,
              timestamp: Firebase.ServerValue.TIMESTAMP,
              data: data.length === 1 ? data[0][0] : data.map(x => x[0]),
            });
          }
        })
        .then(resolve);
    }); // eslint-disable-line no-unused-vars
  });
}

getScrapers.then(_.forEach(startQueue));
