const process = require('./process');
const initializeScraper = require('./lib/initializeScraper');

module.exports = {
  initializeScraper,
  async scrape({
    queueItem,
    scraper,
    takeScreenshot = false,
  } = {}) {
    if (!queueItem.url) {
      throw new Error('Scrape() requires a valid url to be passed in');
    }
    if (!scraper) {
      throw new Error('Scrape() requires a valid scraper to be passed in');
    }
    if (!queueItem.method) {
      throw new Error('Scrape() requires a valid method to be passed in');
    }

    const {
      queue, data, finalUrl, screenshot,
    } = await process({
      queueItem,
      scraper,
      takeScreenshot,
    });

    return {
      queue, data, finalUrl, screenshot,
    };
  },
};
