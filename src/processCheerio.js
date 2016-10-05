import request from 'request-promise';
import queueUtil from './lib/queue-util.js';
import dataUtil from './lib/data-util.js';

export default async function processCheerio({ cheerio, queueItem, scraper, switchUse }) {
  try {
    const content = await request({
      uri: queueItem.url,
      resolveWithFullResponse: true,
    });

    const $ = cheerio.load(content.body, content.request.href);
    const baseHref = $('base').attr('href') || content.request.href;

    // we shouldn't change this private property, but considering there's no good way of changing
    // the baseHref without reloading the content in cheerio, we'll allow it for now.
    $._options.baseHref = baseHref; // eslint-disable-line no-underscore-dangle

    const utils = {
      $,
      queue: queueUtil(),
      data: dataUtil(),
      queueItem,
      use: method => switchUse(method),
    };

    const data = await scraper[queueItem.method](utils);

    if (data && data.finalUrl) {
      // looks like they used switch
      console.log('Looks like they switched methods');
      return data;
    }

    return {
      queue: utils.queue.getQueue(),
      data: utils.data.getData(),
      finalUrl: content.request.href,
    };
  } catch (error) {
    scraper.error('BIGERR: An error occurred processing an item', error, 'from url: ', queueItem.url);
  }
  return [];
}
