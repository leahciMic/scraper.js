var Scraper = require('../scraper.js');
var bluebird = require('bluebird');

// will spit out a scraper

var scraper = new Scraper({
  empty: () => {
    return scraper.workQueue.push('https://www.reddit.com', 'getTopLink');
  },
  getTopLink: ($) => {
    return $('div.entry').map(function(element) {
      return {
        title: element.find('a.title').text(),
        href: element.find('a.title').href(),
        commentUrl: element.find('a.comments').href()
      };
    }).then(function(values) {
      scraper.store.save('links', values);
    });
  }
});

scraper
  .run()
  .then(function() {
    return scraper.store.getAll();
  })
  .then(function(links) {
    console.log(links);
  });
