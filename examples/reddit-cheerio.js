export default {
  use: 'cheerio',
  start: { url: 'http://reddit.com/', method: 'home', use: 'cheerio' },
  name: 'Reddit',
  home({ $, queue }) {
    $('a.bylink')
      .map((i, x) => $(x).prop('href')).get()
      .forEach(href => queue({
        url: href,
        method: 'story',
        use: 'cheerio',
      }));
  },
  story({ $, data }) {
    data({
      name: $('title').text().trim(),
    });
  },
};
