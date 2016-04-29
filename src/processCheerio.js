import request from 'request-promise';
import queueUtil from './lib/queue-util.js';
import dataUtil from './lib/data-util.js';

export default async function processCheerio({ cheerio, queueItem, scraper }) {
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
      // _queueItem => {
      //   // is this still needed?
      //   queue.push(
      //     Object.assign({}, _queueItem, { url: url.resolve(baseHref, _queueItem.url) }),
      //   );
      // }
      queue: queueUtil(),
      data: dataUtil(),
    };

    scraper[queueItem.method](utils);

    return {
      queue: utils.queue.getQueue(),
      data: utils.data.getData(),
      finalUrl: content.request.href,
    };
  } catch (error) {
    scraper.error('BIGERR: An error occurred processing an item', error);
  }
  return [];
}
