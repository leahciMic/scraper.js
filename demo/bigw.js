import { Scraper, filterParams, setParams } from '../index.js';
const ONE_DAY = 86400000;
const SEVEN_DAYS = ONE_DAY * 7;

// https://www.bigw.com.au/womens-clothing-accessories/c/69/?q=%3Arelevance%3AmanufacturerName%3ABonds&page=1

export default class BigWScraper extends Scraper {
  start() {
    this.queue('https://www.bigw.com.au/', 'category');
  }
  category($) {
    $('a[href*="/c/"]').map((i, x) => $(x).prop('href')).get()
      .forEach(href => this.queue(href, 'category'));
    $('a[href*="/p/"]').map((i, x) => $(x).prop('href')).get()
      .forEach(href => this.queue(href, 'product'));
  }
  product($) {
    this.data({
      name: $('h1[itemprop="name"]').text().trim(),
      price: $('[itemprop="price"]:contains($):first').text().trim(),
      image: $('.MagicZoomPlus').prop('href'),
      description: $('[itemprop="description"]').text().trim(),
    });
  }
  filterQueueItem(queueItem) {
    if (queueItem.method === 'category') {
      return setParams(filterParams(queueItem.url, ['page']), {
        pageSize: 144,
      });
    }
    return queueItem.url;
  }
}

BigWScraper.timeBetween = ONE_DAY;
