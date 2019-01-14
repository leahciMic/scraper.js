const request = require('request-promise');
const cloneDeep = require('lodash/cloneDeep');

const config = require('./lib/config');
const queueUtil = require('./lib/injectables/queue-util');
const dataUtil = require('./lib/injectables/data-util');

module.exports = async function processRegex({ queueItem, scraper }) {
  try {
    const noop = x => x;
    const content = await request({
      uri: (scraper.filterUrl || noop)(queueItem.url),
      resolveWithFullResponse: true,
      headers: {
        'User-Agent': queueItem.userAgent || scraper.userAgent || config.USER_AGENT,
      },
    });

    const utils = {
      body: content.body,
      queue: queueUtil(),
      data: dataUtil(),
      queueItem: cloneDeep(queueItem),
      headers: content.headers,
    };

    scraper[queueItem.method](utils);

    return {
      queue: utils.queue.getQueue(),
      data: utils.data.getData(),
      finalUrl: content.request.href,
    };
  } catch (error) {
    throw error;
  }
};
