'use strict';

module.exports = {
  start: { url: 'https://www.reddit.com/', method: 'home' },
  name: 'Reddit',
  home: function home(_ref) {
    var $ = _ref.$;
    var queue = _ref.queue;

    $('a.bylink').map(function (i, x) {
      return $(x).prop('href');
    }).get().forEach(function (href) {
      return queue(href, 'story');
    });
  },
  story: function story(_ref) {
    var $ = _ref.$;
    var data = _ref.data;

    data({
      name: $('title').text().trim()
    });
  }
};
