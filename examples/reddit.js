export default {
  start: { url: 'https://www.reddit.com/', method: 'home' },
  name: 'Reddit',
  home({ $, queue }) {
    $('a.bylink')
      .map((i, x) => $(x).prop('href')).get()
      .forEach(href => queue(href, 'story'));
  },
  story({ $, data }) {
    data({
      name: $('title').text().trim(),
    });
  },
};
