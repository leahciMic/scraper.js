import _ from 'lodash/fp';
import filesParser from './lib/filesParser.js';
import debug from 'debug';

const ONE_HOUR = 3600000;

const initializeScraper = (scraper) => {
  // eslint-disable-next-line no-param-reassign
  scraper.timeBetween = scraper.timeBetween || ONE_HOUR;

  if (!scraper.name) {
    throw new Error('name must exist');
  }

  if (typeof scraper.timeBetween !== 'number') {
    throw new Error('timeBetween must be a number');
  }

  /* eslint-disable no-param-reassign, no-console */
  scraper.log = debug(`scraperjs ${scraper.name}:log`);
  scraper.warn = debug(`scraperjs ${scraper.name}:warn`);
  scraper.error = debug(`scraperjs ${scraper.name}:error`);
  /* eslint-enable no-param-reassign, no-console */

  return scraper;
};

export default function getScrapers(files) {
  return filesParser(files)
    .then(_.map(file => require(file))) // eslint-disable-line global-require
    .then(_.map(scraper => scraper.default || scraper))
    .then(_.map(initializeScraper));
}
