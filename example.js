var Scraper = require('./main.js');
var bluebird = require('bluebird');

// will spit out a scraper

module.exports = Scraper({
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
      return bluebird.all(values.filter((r) => r.title).map(function(post) {
        // console.log(post);
        return scraper.workQueue.push(post.commentUrl, 'readComment', post);
      }));
    }).catch(function(values) {
      console.log(values);
      console.log(values.stack);
    });
  },
  readComment: ($, metaData) => {
    return scraper.client.getTitle().then(function(text) {
      return scraper.store.save('reddit.comment.' + metaData.commentUrl.replace(/\./g, '-dot-'), text);
    });
    return $('.usertext-body').text().then(function(text) {
      return scraper.store.save('reddit.comment.' + metaData.commentUrl.replace(/\./g, '-dot-'), text);
    });
  }
});

scraper
  .run()
  .then(function() {
    return scraper.store.getAll().then(function(value) {
      console.log(value);
    });
  }).catch(function(error) {
    console.log(error);
  });
