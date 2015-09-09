'use strict';

const Scraper = require('../main.js');
const bluebird = require('bluebird');
const noop = function() {};

describe('Scraper', () => {
  let scraperConf;

  beforeEach(() => {
    scraperConf = jasmine.createSpyObj('scraper', ['init', 'empty', 'test']);
  });

  it('should throw on missing empty queue function', () => {
    expect(() => {
      new Scraper();
    }).toThrowError(/missing empty function/);
  });

  it('should complain if init function does not return a promise', () => {
    let scraper = new Scraper(scraperConf);
    spyOn(scraper, 'createClient');
    expect(scraper.init.bind(scraper)).toThrowError(/init must return a thenable/);
  });

  describe('after init', () => {
    let scraper;

    beforeEach(() => {
      scraperConf.init.and.callFake(bluebird.resolve.bind(bluebird, 'test'));
      scraperConf.empty.and.callFake(() => {
        return scraper.workQueue.push('foo', 'bar', {foo: 'bar'});
      });

      scraper = new Scraper(scraperConf);

      // prevent next from running by default
      spyOn(scraper, 'createClient').and.callFake(function() {
        scraper.client = jasmine.createSpyObj('client', ['end']);
      });
      spyOn(scraper, 'next');
    });

    it('should call init function on run', (done) => {
      spyOn(scraper, 'checkForEmptyQueue');
      scraper.createClient();
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

    xit('should establish a webdriver connection', () => {

    });

    it('should keep cycling items until done', (done) => {
      spyOn(scraper, 'processItem').and.callFake(
        bluebird.resolve.bind(bluebird, true)
      );

      scraper.next.and.callThrough();

      bluebird.join(
        scraper.workQueue.push('foo1', 'bar', {}),
        scraper.workQueue.push('foo2', 'bar', {})
      )
        .then(scraper.next.bind(scraper))
        .then((result) => {
          expect(scraper.next.calls.count()).toBe(3);
          expect(scraper.processItem.calls.count()).toBe(2);
          expect(result).toBe(true);
          done();
        });
    });

    describe('when processing an item', () => {
      it('should navigate the browser to the url', (done) => {
        var fakeClient = jasmine.createSpyObj(
          'fake client', ['url', 'then', 'find']
        );
        fakeClient.url.and.callFake(() => {
          return bluebird.resolve();
        });
        fakeClient.then.and.callFake(() => {
          return fakeClient;
        });

        scraper.client = fakeClient;

        let queueItem = {
          url: 'http://foo.bar',
          fn: 'test',
          meta: {}
        };

        scraper.processItem(queueItem).then(() => {
          expect(fakeClient.url).toHaveBeenCalled();
          expect(scraperConf.test).toHaveBeenCalled();
          done();
        });
      });
    });

    // should be able to query data from the page
    // should be able to queue more things
    // should not have issues with large queues (stack overflows, ever growing promise chains etc)
  });
});
