import { Scraper } from '../index.js';
const ONE_DAY = 86400000;

export default class RedditScraper extends Scraper {
  start() {
    this.queue('https://www.reddit.com/', 'subreddit');
  }
  subreddit($) {
    $('a.bylink').each((i, link) => {
      this.queue($(link).attr('href'), 'comments');
    });
  }
  comments($) {

  }
}
RedditScraper.timeBetween = ONE_DAY;
