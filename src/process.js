const processBrowser = require('./processBrowser.js');
const processCheerio = require('./processCheerio.js');
const processRegex = require('./processRegex.js');

module.exports = async function process({
  queueItem, scraper,
}) {
  // @todo move the url filtering logic here so it's shared amongst the different
  // process functions
  function processWith(use) {
    scraper.log(`Using ${use} for ${queueItem.url}`);
    switch (use) {
      case 'browser':
      default:
        return processBrowser({ queueItem, scraper });
      case 'cheerio':
        return processCheerio({
          queueItem, scraper,
        });
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
