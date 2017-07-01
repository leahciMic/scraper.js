#!/usr/bin/env node

const _ = require('lodash/fp');
const debug = require('debug');
const program = require('commander');
const path = require('path');
const promiseEach = require('promise-each-concurrency');
const cheerio = require('cheerio');
const requireES6 = require('./lib/requireES6.js');
const blessed = require('blessed');

const screen = blessed.screen({
  smartCSR: true,
  width: '100%',
  height: '100%',
});

screen.title = 'Scraper.js';

const layout = blessed.layout({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  border: 'line',
  layout: 'grid',
  style: {
    bg: '#aaa',
    border: {
      bg: '#eef',
    },
  },
});

screen.append(layout);
screen.render();

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

const dataPlugin = requireES6(path.resolve(program.data));
const { createQueue } = requireES6(path.resolve(program.queue));

function startQueue(scraper) {
  const queueLayout = blessed.layout({
    width: 60,
    height: 15,
    border: 'line',
  });
  layout.append(queueLayout);
  queueLayout.append(blessed.text({
    width: queueLayout.width - 2,
    height: 1,
    content: scraper.name,
  }));
  const statusText = blessed.text({
    width: queueLayout.width - 2,
    height: 1,
    content: 'Waiting for jobs',
  });
  queueLayout.append(statusText);
  const logScroll = blessed.log({
    width: queueLayout.width - 2,
    height: 11,
    scrollback: 50,
  });
  queueLayout.append(logScroll);
  screen.render();
  return new Promise(async function processQueue(resolve) {
    let browser;

    const scraperQueue = createQueue(`scraperjs:${scraper.name}`);

    // @todo maybe the scraper queue should be instantiated with expiry
    const addToQueue = queueItem => scraperQueue.add(
      _.assign({ expiry: scraper.timeBetween }, queueItem),
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
        scraperQueue.close();
        if (browser) {
          browser.quit();
        }

        statusText.content = 'No jobs, finishing';
        screen.render();
        setTimeout(() => {
          queueLayout.destroy();
          screen.render();
        }, 2500);

        resolve();
      }, 5000);
    }

    resetFinishTimeout();

    scraperQueue.process(async (queueItem) => {
      if (finishedTimeout) {
        clearTimeout(finishedTimeout);
        finishedTimeout = undefined;
      }

      scraper.log('process', queueItem.url);
      statusText.content = 'Received job';
      logScroll.log(queueItem.url);
      screen.render();

      if ((queueItem.use || scraper.use || 'browser') === 'browser' && !browser) {
        scraper.log('starting browser');
        statusText.content = 'Starting browser';
        screen.render();
        browser = await createBrowser();
      }

      statusText.content = 'Processing job';
      screen.render();

      const { queue, data, finalUrl } = await processItem({
        browser,
        queueItem,
        scraper,
        cheerio,
      })
        .catch((err) => {
          scraper.error('error processing item', err);
          throw err;
        });

      scraper.log('finished', queueItem.url);
      statusText.content = 'Finished job';
      screen.render();

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


  // Array.from(new Array(+program.concurrency)).forEach(() => {

  // });



  // console.log('ok');

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
