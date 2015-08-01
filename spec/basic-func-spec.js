'use strict';

const Scraper = require('../rewrite.js');
const bluebird = require('bluebird');
const noop = function() {};

describe('Scraper', () => {
  let scraperConf;

  beforeEach(() => {
    scraperConf = jasmine.createSpyObj('scraper', ['init', 'empty']);
  });

  it('should throw on missing empty queue function', () => {
    expect(Scraper).toThrowError(/missing empty function/);
  });

  it('should complain if init function does not return a promise', () => {
    let scraper = Scraper(scraperConf);

    expect(scraper.run.bind(scraper)).toThrowError(/init must return a thenable/);
  });

  describe('after init', () => {
    let scraper;

    beforeEach(() => {
      scraperConf.init.and.callFake(bluebird.resolve.bind(bluebird, 'test'));
      scraperConf.empty.and.callFake(() => {
        return scraper.workQueue.push('foo', 'bar', {foo: 'bar'});
      });

      scraper = Scraper(scraperConf);

      // prevent next from running by default
      spyOn(scraper, 'next');
    });

    it('should call init function on run', (done) => {
      expect(scraperConf.init).not.toHaveBeenCalled();
      scraper.run().then(function() {
        expect(scraperConf.init).toHaveBeenCalled();
        done();
      });
    });

    it('should fulfil a promise when complete', (done) => {
      scraper.run().then(done);
    });

    it('should call next after init function is finished', (done) => {
      scraper.run().then(() => {
        expect(scraper.next).toHaveBeenCalled();
        done();
      });

      // ensure we don't call it before the promise is resolved
      expect(scraper.next).not.toHaveBeenCalled();
    });

    it('should call empty with an empty queue', (done) => {
      scraper.run().then(() => {
        expect(scraperConf.empty).toHaveBeenCalled();
        done();
      });
    });

    // should pull next item
    // should navigate to next queue item
    // should be able to query data from the page
    // should be able to queue more things
    // should not have issues with large queues (stack overflows, ever growing promise chains etc)
  });
});
