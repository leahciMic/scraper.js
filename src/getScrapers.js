const _ = require('lodash/fp');
const debug = require('debug');

const filesParser = require('./lib/filesParser.js');

const ONE_HOUR = 3600000;

const initializeScraper = ([scraper, file]) => {
  if (typeof scraper !== 'function') {
    throw new Error(`Scraper must be a factory function that returns a scraper definition. See ${file}`);
  }
  const scraperInstance = scraper();

  scraperInstance.construct = scraper;

  // eslint-disable-next-line no-param-reassign
  scraperInstance.timeBetween = scraperInstance.timeBetween || ONE_HOUR;

  if (!scraperInstance.name) {
    throw new Error('name must exist');
  }

  if (typeof scraperInstance.timeBetween !== 'number') {
    throw new Error('timeBetween must be a number');
  }

  /* eslint-disable no-param-reassign, no-console */
  scraperInstance.log = debug(`scraperjs:log:${scraperInstance.name}`);
  scraperInstance.warn = debug(`scraperjs:warn:${scraperInstance.name}`);
  scraperInstance.error = debug(`scraperjs:error:${scraperInstance.name}`);
  scraperInstance.debug = debug(`scraperjs:debug:${scraperInstance.name}`);

  /* eslint-enable no-param-reassign, no-console */

  return scraperInstance;
};

module.exports = function getScrapers(files) {
  return filesParser(files)
    // eslint-disable-next-line global-require, import/no-dynamic-require
    .then(_.map(file => [require(file), file]))
    .then(_.map(([scraper, file]) => [scraper.default || scraper, file]))
    .then(_.map(initializeScraper));
};
