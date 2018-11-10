const _ = require('lodash/fp');
const nodeUrl = require('url');
const process = require('./process');
const initializeScraper = require('./lib/initializeScraper');

function parseUrl(url) {
  return _.omit(['search', 'hash'], nodeUrl.parse(url, true));
}

function setParams(url, params) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.assign(parsedUrl.query, params), parsedUrl),
  );
}

function filterParams(url, whitelist) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.pick(whitelist, parsedUrl.query), parsedUrl),
  );
}

module.exports = {
  setParams,
  filterParams,
  initializeScraper,
  async scrape({
    url, userAgent, scraper, method, use, takeScreenshot = false,
  } = {}) {
    if (!url) {
      throw new Error('Scrape() requires a valid url to be passed in');
    }
    if (!scraper) {
      throw new Error('Scrape() requires a valid scraper to be passed in');
    }
    if (!method) {
      throw new Error('Scrape() requires a valid method to be passed in');
    }

    const {
      queue, data, finalUrl, screenshot,
    } = await process({
      queueItem: {
        url,
        userAgent,
        method,
        use,
      },
      scraper,
      takeScreenshot,
    });

    return {
      queue, data, finalUrl, screenshot,
    };
  },
};
