const filesParser = require('./lib/filesParser');
const initializeScraper = require('./lib/initializeScraper');

module.exports = async function getScrapers(files) {
  const scrapers = await filesParser(files);
  return scrapers.map(initializeScraper);
};
