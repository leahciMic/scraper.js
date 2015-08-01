var bluebird = require('bluebird'),
    sanitizeFilename = require('sanitize-filename'),
    scraperjs = require('../main.js')({
      instances: 1
    });

scraperjs.on('init', function(instanceId, $) {
  return $.get('about:blank');
});

scraperjs.on('empty', function($) {
  return $.queueLink(
    'http://www.imdb.com/search/title?count=100&title_type=feature,tv_series,tv_movie&explore=title_type,genres,year,countries&ref_=nv_ch_mm_1',
    'getTopMoviesAndTV'
  );
});

scraperjs.on('getTopMoviesAndTV', function($) {
  return $('table tr.detailed').map(function(element) {
    return {
      number: element('.number').text(),
      image: element('.image img').attr('src'),
      title: element('.title>a').text(),
      year: element('.year_type').text(),
      runtime: element('.runtime').text(),
      genre: element('.genre').text(),
      outline: element('.outline').text(),
      rating: element('.rating .rating-rating .value').text(),
      imdb: element('.title [data-tconst^="tt"]').attr('data-tconst')
    };
  }).then(function(data) {
    return $.store('imdb.json', JSON.stringify(data));
  });
});

scraperjs();

// module.exports = function(browser, $, by, until) {
//   return {
//     init: function(i) {
//       return browser.get('about:blank');
//     },
//     onEmpty: function() {
//       return scraper.queueLink(
//         'http://www.imdb.com/search/title?count=100&title_type=feature,tv_series,tv_movie&explore=title_type,genres,year,countries&ref_=nv_ch_mm_1',
//         'getTopMoviesAndTV'
//       );
//     },
//     getTopMoviesAndTV: function() {
//       return scraper('table tr.detailed').map(function(element) {
//         return {
//           number: element('.number').text(),
//           image: element('.image img').attr('src'),
//           title: element('.title>a').text(),
//           year: element('.year_type').text(),
//           runtime: element('.runtime').text(),
//           genre: element('.genre').text(),
//           outline: element('.outline').text(),
//           rating: element('.rating .rating-rating .value').text(),
//           imdb: element('.title [data-tconst^="tt"]').attr('data-tconst')
//         };
//       }).then(function(data) {
//         return scraper.store('imdb.json', JSON.stringify(data));
//       });
//     }
//   };
// };

