import { Scraper } from '../';
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
    $('.comment .entry')
      .each((i, e) => {
        this.data({
          content: $(e).find('.usertext-body').text(),
          author: $(e).find('.author').text(),
          score: $(e).find('.unvoted').text(),
        });
      });
  }
}

RedditScraper.timeBetween = ONE_DAY;
