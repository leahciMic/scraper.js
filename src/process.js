const uniqBy = require('lodash/uniqBy');
const processCheerio = require('./processCheerio.js');
const processBrowserLite = require('./processBrowser');
const processRegex = require('./processRegex.js');
const processStream = require('./processStream');

module.exports = async function process({
  queueItem, scraper, takeScreenshot = false,
}) {
  if (!queueItem.url.match(/^https?/)) {
    throw new Error(`Invalid protocol in ${queueItem.url}`);
  }

  function processWith(use) {
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
      case 'stream':
        return processStream({ queueItem, scraper });
    }
  }

  const data = await processWith(
    typeof scraper === 'string' ? 'browser'
      : queueItem.use || scraper.use || 'browser',
  );
  if (data.data && data.data.finalUrl) {
    // eslint-disable-next-line no-param-reassign
    data.finalUrl = data.data.finalUrl;
  }

  if (typeof scraper === 'string') {
    data.queue = uniqBy(data.queue, 'url');
  } else if (data.queue && data.queue.length) {
    if (scraper.filterQueueItem) {
      data.queue = uniqBy(data.queue.map((qi) => {
        Object.assign(qi, { url: scraper.filterQueueItem(qi) });
        return qi;
      }), 'url');
    }
  }

  return data;
};
