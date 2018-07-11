const filesParser = require('./lib/filesParser');
const initializeScraper = require('./lib/initializeScraper');

module.exports = async function getScrapers(files) {
  const scrapers = await filesParser(files);
  return scrapers
    // eslint-disable-next-line import/no-dynamic-require, global-require
    .map(path => require(path))
    .map(initializeScraper);
};
