const axios = require('axios').default;
const cloneDeep = require('lodash/cloneDeep');

const config = require('./lib/config');
const queueUtil = require('./lib/injectables/queue-util.js');
const dataUtil = require('./lib/injectables/data-util.js');

// @todo eventually we'll deprecate processRegex in favor of just processAxios or
// something similar (I'm in favor of calling a spade a spade, we should probably
// also call processBrowsers processPuppeteer or something too...)

module.exports = async function processStream({ queueItem, scraper }) {
  try {
    const response = await axios({
      // @todo filtering should happen when adding to the queue, not when processing
      // the queue.
      url: queueItem.url,
      responseType: 'stream',
      headers: {
        'User-Agent': queueItem.userAgent || scraper.userAgent || config.USER_AGENT,
      },
    });

    const utils = {
      body: response.data,
      queue: queueUtil(),
      data: dataUtil(),
      queueItem: cloneDeep(queueItem),
      headers: response.headers,
    };

    scraper[queueItem.method](utils);

    return {
      queue: utils.queue.getQueue(),
      data: utils.data.getData(),
      finalUrl: response.request.url,
    };
  } catch (error) {
    throw error;
  }
};
