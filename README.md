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
  home({ $, queue }) {
    $('a.bylink')
      .map((i, x) => $(x).prop('href'))
      .get()
      .forEach(url => queue({ url, method: 'story' });
  },
  story({ $, data }) {
    data({
      name: $('title').text().trim()
    });
  }
};
```

Write a data manager:

```js
// save as data.js
module.exports = function(data) {
  console.log(data);
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
