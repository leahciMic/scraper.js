import processBrowser from './processBrowser.js';
import processCheerio from './processCheerio.js';
import processRegex from './processRegex.js';

export default function process({ browser, cheerio, queueItem, scraper }) {
  // browser, url, fn
  function switchUse(use) {
    scraper.log(`Using ${use} for ${queueItem.url}`);
    switch (use) {
      case 'browser':
      default:
        return processBrowser({ browser, queueItem, scraper });
      case 'cheerio':
        return processCheerio({ cheerio, queueItem, scraper, switchUse });
      case 'regex':
        return processRegex({ queueItem, scraper });
    }
  }

  return switchUse(queueItem.use || scraper.use || 'browser');
}
