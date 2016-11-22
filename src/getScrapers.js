import _ from 'lodash/fp';
import debug from 'debug';

import filesParser from './lib/filesParser.js';

const ONE_HOUR = 3600000;

const initializeScraper = (scraper) => {
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
  scraperInstance.log = debug(`scraperjs ${scraper.name}:log`);
  scraperInstance.warn = debug(`scraperjs ${scraper.name}:warn`);
  scraperInstance.error = debug(`scraperjs ${scraper.name}:error`);
  /* eslint-enable no-param-reassign, no-console */

  return scraperInstance;
};

export default function getScrapers(files) {
  return filesParser(files)
    .then(_.map(file => require(file))) // eslint-disable-line global-require
    .then(_.map(scraper => scraper.default || scraper))
    .then(_.map(initializeScraper));
}
