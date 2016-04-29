import processBrowser from './processBrowser.js';
import processCheerio from './processCheerio.js';
import processRegex from './processRegex.js';

export default function process({ browser, cheerio, queueItem, scraper }) {
  // browser, url, fn
  const use = queueItem.use || scraper.use || 'browser';

  switch (use) {
    case 'browser':
    default:
      return processBrowser({ browser, queueItem, scraper });
    case 'cheerio':
      return processCheerio({ cheerio, queueItem, scraper });
    case 'regex':
      return processRegex({ queueItem, scraper });
  }
}
