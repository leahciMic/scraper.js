import request from 'request-promise';
import queueUtil from './lib/queue-util.js';
import dataUtil from './lib/data-util.js';

export default async function processRegex({ queueItem, scraper }) {
  try {
    scraper.log('Downloading page');
    const content = await request({
      uri: queueItem.url,
      resolveWithFullResponse: true,
    });
    scraper.log('Downloaded page');
    const utils = {
      body: content.body,
      queue: queueUtil(),
      data: dataUtil(),
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
}
