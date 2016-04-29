import bluebird from 'bluebird';
import path from 'path';
import matchExtension from './lib/matchExtension.js';
import _ from 'lodash/fp';
import fs from 'fs';
import Firebase from 'firebase';
import FirebaseQueue from 'firebase-queue';
import createBrowser from './lib/browser.js';
import sha256 from './lib/sha256.js';
import debug from 'debug';

const log = debug('scraperjs');

const ONE_HOUR = 3600000;

const rootRef = new Firebase(process.env.FIREBASE_URL);

bluebird.promisifyAll(fs);

function startQueue(scraper) {
  const scraperLog = debug('scraperjs ' + scraper.name);
  scraperLog('queue starting');
  const queueRef = rootRef.child(scraper.name);
  const dataRef = rootRef.child(scraper.name).child('data');

  // oh we probably need to index this data by url, so how are we going to get that property?
  scraper.on('data', (data) => {
    dataRef.push(data);
  });

  scraper.on('queue', (queueItem) => {
    scraperLog('requested to queue', queueItem);
    const urlHash = sha256(queueItem.url);
    queueRef.child('lastAdded').child(urlHash).once('value', (value) => {
      if (value.val() === null || +new Date() > value.val() + scraper.timeBetween) {
        value.ref().set(Firebase.ServerValue.TIMESTAMP);
        queueRef.child('tasks').push(queueItem);
      } else {
        scraperLog('Ignorining request to queue an item we saw not long ago', queueItem.url);
      }
    });
  });

  scraper.start();

  createBrowser().then((browser) => {
    scraperLog('Started browser');
    // other args are progress, resolve, reject
    const processItem = (data, progress, resolve) => {
      scraperLog('Processing item from queue', data.url, data.method);
      browser.navigate(data.url);
      browser.injectJQuery();
      browser.runInContextOfJquery(scraper[data.method]).then((stuff) => {
        scraperLog('Got back', stuff);
        scraperLog(stuff.queue.forEach);
        stuff.queue.forEach((args) => {
          scraper.queue(...args);
        });

        scraper.data({
          url: data.url,
          method: data.method,
          timestamp: Firebase.ServerValue.TIMESTAMP,
          data: stuff.data.map(x => x[0]),
        });

        resolve();
      });
    };

    const queue = new FirebaseQueue(queueRef, processItem);
  });
}

const SCRAPERS_DIR = path.resolve('./demo');

fs.readdirAsync(SCRAPERS_DIR)
  .then(_.filter(matchExtension('.js')))
  // eslint-disable-next-line global-require
  .then(_.map((file) => require(path.join(SCRAPERS_DIR, file))))
  .then(_.map(Class => Class.default || Class))
  .then(_.map((Class) => {
    const obj = new Class();
    if (!obj.name) {
      obj.name = Class.name;
    }
    if (!obj.timeBetween) {
      obj.timeBetween = Class.timeBetween || ONE_HOUR;
    }
    return obj;
  }))
  .then(_.forEach(startQueue));
