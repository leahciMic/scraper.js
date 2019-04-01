const bunyan = require('bunyan');

module.exports = bunyan.createLogger({
  name: 'Scraper.JS',
  level: 'debug',
});
