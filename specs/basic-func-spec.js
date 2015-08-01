var Scraper = require('../rewrite.js');
var noop = function() {};

describe('Scraper', function() {
  var scraperConf;

  beforeEach(function() {
    scraperConf = jasmine.createSpyObj('scraper', ['init', 'empty']);
  });

  it('should throw on missing empty queue function', function() {
    expect(Scraper).toThrowError(/missing empty function/);
  });

  it('should complain if init function does not return a promise', function() {
    var scraper = Scraper(scraperConf);

    expect(scraper.run.bind(scraper)).toThrowError(/init must return a thenable/);
  });

  describe('', function() {
    beforeEach(function() {
      scraperConf.init.and.returnValue({next: noop});
    });

    it('should call init function with scraper object', function() {
      var scraper = Scraper(scraperConf);

      scraper.run();
      expect(scraperConf.init).toHaveBeenCalled();
    });

    it('should call empty if the queue is empty', function() {

    });
  });
});
