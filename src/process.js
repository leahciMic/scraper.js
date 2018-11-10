const uniqBy = require('lodash/uniqBy');
const processCheerio = require('./processCheerio.js');
const processBrowserLite = require('./processBrowserLite');
const processRegex = require('./processRegex.js');

module.exports = async function process({
  queueItem, scraper, takeScreenshot = false,
}) {
  if (!queueItem.url.match(/^https?/)) {
    throw new Error(`refusing to navigate to ${queueItem.url}`);
  }

  function processWith(use) {
    scraper.log(`Using ${use} for ${queueItem.url}`);
    switch (use) {
      case 'browser':
      case 'browser-lite':
      default:
        return processBrowserLite({ queueItem, scraper, takeScreenshot });
      case 'cheerio':
        return processCheerio({
          queueItem, scraper,
        });
      case 'regex':
        return processRegex({ queueItem, scraper });
    }
  }

  const data = await processWith(queueItem.use || scraper.use || 'browser');
  if (data.data && data.data.finalUrl) {
    // eslint-disable-next-line no-param-reassign
    data.finalUrl = data.data.finalUrl;
  }

  if (data.queue && data.queue.length) {
    if (scraper.filterQueueItem) {
      data.queue = uniqBy(data.queue.map((qi) => {
        Object.assign(qi, { url: scraper.filterQueueItem(qi) });
        return qi;
      }), 'url');
    }
  }

  return data;
};
