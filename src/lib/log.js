const debug = require('debug');

const log = debug('scraperjs:log');
log.error = debug('scraperjs:error');
log.warn = debug('scraperjs:warn');

module.exports = log;
