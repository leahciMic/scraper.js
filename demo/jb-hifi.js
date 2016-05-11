import { Scraper, filterParams, setParams } from '../index.js';
const ONE_DAY = 86400000;

// https://www.bigw.com.au/womens-clothing-accessories/c/69/?q=%3Arelevance%3AmanufacturerName%3ABonds&page=1

export default class JBHiFiScraper extends Scraper {
  start() {
    this.queue('https://www.jbhifi.com.au/', 'home');
  }
  home($) {
    $('ul.products a').map((i, x) => $(x).prop('href')).get()
      .forEach(href => this.queue(href, 'category'));
  }
  category($) {
    $('[data-productid] a.link').map((i, x) => $(x).prop('href')).get()
      .forEach(href => this.queue(href, 'product'));
    $('.pagNum a').map((i, x) => $(x).prop('href')).get()
      .forEach(href => this.queue(href, 'product'));
  }
  product($) {
    this.data({
      name: $('.primary h1').text().trim(),
      price: $('meta[property=price]').attr('content'),
      image: window.location.protocol + '//' + window.location.hostname + $('.gallery .image img').attr('data-src-retina'),
      description: $('[itemprop=description] > *').not('.wishlistBtnContainer, #BVRRSummaryContainer').text(),
      brand: $('.overview .brand img').attr('alt'),
    });
  }
  filterQueueItem(queueItem) {
    if (queueItem.method === 'category') {
      return setParams(filterParams(queueItem.url, ['pg']));
    }
    return queueItem.url;
  }
}

JBHiFiScraper.timeBetween = ONE_DAY;
