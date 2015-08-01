'use strict';

const bluebird = require('bluebird');
const EventEmitter = require('events').EventEmitter;
const webdriver = require('selenium-webdriver');
const WorkQueue = require('./lib/work-queue.js');
const uuid = require('node-uuid');

const getBrowser = () => {
  return new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .build();
};

class Scraper {
  constructor(config) {
    // lexical scoping (fat arrows) does not quite work properly in iojs 2.5.0
    // @todo remove this when v8 supports fat arrows and it's on by default
    let _this = this;

    this.config = config;
    this.workQueue = new WorkQueue({
      id: config.name || 'anonymous-' + uuid()
    });

    webdriver.promise.createFlow(() => {
      _this.browser = getBrowser();
    });
  }

  run() {
    // do the init
    let promise = bluebird.resolve();

    if (this.config.init) {
      promise = this.config.init();

      if (!promise || !promise.then) {
        throw new Error('init must return a thenable');
      }
    }

    // check if the queue is empty
    promise = promise.bind(this)
      .return(this.workQueue)
      .call('length')
      .then((length) => {
        if (length === 0) {
          var promise = this.config.empty();
          if (!promise || !promise.then) {
            throw new Error('empty function should return a promise');
          }

          return promise.return(this.workQueue)
            .call('length')
            .then((length) => {
              if (length === 0) {
                throw new Error(
                  'empty function did not add any jobs to the queue. it ' +
                  'must add at least one job and resolve once the job has ' +
                  'been added to the queue.'
                );
              }
            });
        }
      });

    // run the next task
    return promise.then(() => {
      return this.next();
    });
  }

  next() {
    let _this = this;

    return this.workQueue.next().then((queueItem) => {
      // the queue is empty
      if (queueItem === undefined) {
        // next is purposefully wrapped in a function and it's promise is not
        // returned. this is to prevent the promise chain from growing forever.
        return true;
      }

      // redirect browser there and wait
      return _this.browser.get(queueItem.url).then(() => {
        // call the function with the metadata specified
        if (!_this.config[queueItem.fn]) {
          throw new Error(
            'the function \'' + queueItem.fn + '\' does not exist on the scraper'
          );
        }

        // jQuery like interface
        var $ = {};

        // expose $ (our made up jQuery like interface)
        // and scraper. Please see original POC for $ jQuery like behaviour
        return _this.config[queueItem.fn]($, _this);
      }).then(() => {
        _this.next();
      });

    });
  }
}

module.exports = (scraperObj) => {
  scraperObj = scraperObj || {};
  if (!scraperObj.empty) {
    throw new Error('missing empty function');
  }

  return new Scraper(scraperObj);
};
