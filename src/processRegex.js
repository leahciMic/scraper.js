const request = require('request-promise');
const cloneDeep = require('lodash/cloneDeep');

const queueUtil = require('./lib/queue-util.js');
const dataUtil = require('./lib/data-util.js');

module.exports = async function processRegex({ queueItem, scraper }) {
  try {
    scraper.log('Downloading page');
    const noop = x => x;
    const content = await request({
      uri: (scraper.filterUrl || noop)(queueItem.url),
      resolveWithFullResponse: true,
      headers: {
        'User-Agent': queueItem.userAgent || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36',
      },
    });
    scraper.log('Downloaded page');
    const utils = {
      body: content.body,
      queue: queueUtil(),
      data: dataUtil(),
      queueItem: cloneDeep(queueItem),
    };
    scraper.log('Calling user function');
    scraper[queueItem.method](utils);

    return {
      queue: utils.queue.getQueue(),
      data: utils.data.getData(),
      finalUrl: content.request.href,
    };
  } catch (error) {
    scraper.error('BIGERR: An error occurred processing an item', error, 'from url: ', queueItem.url);
    throw error;
  }
};
