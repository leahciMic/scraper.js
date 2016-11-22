module.exports = function redditScraper() {
  return {
    start: { url: 'https://www.reddit.com/', method: 'home' },
    name: 'Reddit',
    home({ $, queue }) {
      $('a.bylink')
        .map((i, x) => $(x).prop('href')).get()
        .forEach(url => queue({ url, method: 'story' }));
    },
    story({ $, data }) {
      data({
        name: $('title').text().trim(),
      });
    },
  };
};
