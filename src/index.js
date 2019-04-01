const process = require('./process');
const initializeScraper = require('./lib/initializeScraper');
const logging = require('./lib/log');

module.exports = {
  logging,
  initializeScraper,
  async scrape({
    queueItem,
    scraper,
    takeScreenshot = false,
    log,
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
      log: log || logging,
    });

    return {
      queue,
      data,
      finalUrl,
      screenshot,
    };
  },
};
