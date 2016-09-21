# scraper.js - crawl the web.

Scraper.js is a tool to crawl webpages. It contains various strategies to scrape a page.

## Quick start guide

Install scraper.js:

```sh
npm install --save scraper.js
```

Install a queue manager:

```sh
npm install --save scraper.js-queue-bull
```

Write a scraper:
```js
// save as reddit.js
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
```

Write a data manager:

```js
// save as data.js
export default function(data) {
  console.log(data);
  queue.add(data);
};
```

Run it!

```sh
scraperjs --concurrency 2 --queue scraper.js-queue-bull --data ./data.js ./reddit.js
```

## Todo

* Clean up readme
* Documentation
* Tests
