#!/usr/bin/env node

import _ from 'lodash/fp';
import fs from 'fs';
import createBrowser from './lib/browser.js';
import debug from 'debug';
import getScrapers from './getScrapers.js';
import processItem from './processItem.js';
import bluebird from 'bluebird';
import requireES6 from './lib/requireES6.js';
import program from 'commander';
import path from 'path';

program
  .version(require('../package.json').version)
  .option('-q, --queue <file>', 'Use this queue plugin [memory]')
  .option('-d, --data <file>', 'Use this data plugin')
  .option('-c, --cache <file>', 'Use this url cache provider')
  .parse(process.argv);

if (!program.queue || !program.data || !program.cache) {
  program.help();
}

const dataPlugin = requireES6(path.resolve(program.data));
const queuePlugin = requireES6(path.resolve(program.queue));
const cachePlugin = requireES6(path.resolve(program.cache));

bluebird.promisifyAll(fs);

function startQueue(scraper) {
  const scraperLog = debug(`scraperjs:${scraper.name}`);
  const scraperQueue = queuePlugin(`scraperjs:${scraper.name}`);

  scraperLog('queue starting');

  scraper.on('data', (data) => {
    // console.log('TODO we should be saving DATA!!!', data);
    dataPlugin(data);
  });

  scraper.on('queue', (queueItem) => {
    cachePlugin.get(queueItem.url).then((value) => {
      if (value === null) {
        scraperLog('adding ', queueItem);
        scraperQueue.add({
          url: queueItem.url,
          method: queueItem.method,
        });
      } else {
        scraperLog('skipping ', queueItem.url);
      }
      cachePlugin.set(queueItem.url, true, scraper.timeBetween);
    });
  });

  scraper.start();

  createBrowser().then((browser) => {
    scraperLog('browser process started');
    scraperQueue.process((queueItem) => {
      scraperLog('process', queueItem.url);
      return processItem(
        browser,
        queueItem.url,
        scraper[queueItem.method]
      ).then(({ queue, data, url }) => {
        scraperLog('process', queueItem.url, 'finished');
        const promises = [
          queue.map(args => scraper.queue(...args)),
        ];
        if (data.length) {
          promises.push(scraper.data({
            url: queueItem.url,
            finalUrl: url,
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

getScrapers(program.args).then(_.forEach(startQueue));
