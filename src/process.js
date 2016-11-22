import processBrowser from './processBrowser.js';
import processCheerio from './processCheerio.js';
import processRegex from './processRegex.js';

export default function process({ browser, whacko, cheerio, queueItem, scraper }) {
  // browser, url, fn
  // @todo move the url filtering logic here so it's shared amongst the different
  // process functions
  function switchUse(use) {
    scraper.log(`Using ${use} for ${queueItem.url}`);
    switch (use) {
      case 'browser':
      default:
        return processBrowser({ browser, queueItem, scraper });
      case 'whacko':
        return processCheerio({ cheerio, queueItem, scraper, switchUse });
      case 'cheerio':
        return processCheerio({ cheerio, queueItem, scraper, switchUse });
      case 'regex':
        return processRegex({ queueItem, scraper, switchUse });
    }
  }

  return switchUse(queueItem.use || scraper.use || 'browser')
    .then((data) => {
      if (data.data && data.data.finalUrl) {
        // eslint-disable-next-line no-param-reassign
        data.finalUrl = data.data.finalUrl;
      }
      return data;
    });
}
