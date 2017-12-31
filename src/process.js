const processBrowser = require('./processBrowser.js');
const processCheerio = require('./processCheerio.js');
const processBrowserLite = require('./processBrowserLite');
const processRegex = require('./processRegex.js');

module.exports = async function process({
  queueItem, scraper,
}) {
  if (!queueItem.url.match(/^https?/)) {
    throw new Error(`refusing to navigate to ${queueItem.url}`);
  }

  function processWith(use) {
    scraper.log(`Using ${use} for ${queueItem.url}`);
    switch (use) {
      case 'browser':
      default:
        return processBrowserLite({ queueItem, scraper, loadAll: true });
      case 'cheerio':
        return processCheerio({
          queueItem, scraper,
        });
      case 'browser-lite':
        return processBrowserLite({ queueItem, scraper, loadAll: false });
      case 'regex':
        return processRegex({ queueItem, scraper });
    }
  }

  return processWith(queueItem.use || scraper.use || 'browser')
    .then((data) => {
      if (data.data && data.data.finalUrl) {
        // eslint-disable-next-line no-param-reassign
        data.finalUrl = data.data.finalUrl;
      }
      return data;
    });
};
