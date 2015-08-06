'use strict';

const bluebird = require('bluebird');
const EventEmitter = require('events').EventEmitter;
const webdriver = require('selenium-webdriver');
const WorkQueue = require('./lib/work-queue.js');
const uuid = require('node-uuid');

class Scraper {
  constructor(config) {
    config = config || {};
    // lexical scoping (fat arrows) does not quite work properly in iojs 2.5.0
    // @todo remove this when v8 supports fat arrows and it's on by default

    if (!config.empty) {
      throw new Error('missing empty function');
    }

    let _this = this;

    this.config = config;
    this.workQueue = new WorkQueue({
      id: config.name || 'anonymous-' + uuid()
    });

    this.browserReady = new bluebird.Promise(function(resolve, reject) {
      webdriver.promise.createFlow(() => {
        resolve(_this.getBrowser());
      });
    });
  }

  getBrowser() {
    return new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();
  }

  run() {
    // do the init
    let promise = bluebird.resolve();

    if (!this.browser) {
      return this.browserReady.bind(this).then(function(browser) {
        this.browser = browser;
        return this.run();
      });
    }

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

  processItem(queueItem) {
    // the queue is empty
    // redirect browser there and wait

    return this.browser.get(queueItem.url)
      .bind(this)
      .then(function() {
        // call the function with the metadata specified
        if (!this.config[queueItem.fn]) {
          throw new Error(
            'the function \'' + queueItem.fn + '\' does not exist on the scraper'
          );
        }

        // jQuery like interface
        var $ = this.build$Interface(this.browser);

        // expose $ (our made up jQuery like interface)
        // and scraper. Please see original POC for $ jQuery like behaviour
        return this.config[queueItem.fn]($, this);
      });
  }

  build$Interface(base) {
    let _this = this;
    return (selector) => {
      return {
        text: () => {
          return base.findElements(By.css(selector)).then((elements) => {
            if (!elements.length) {
              return undefined;
            }

            return elements[0].getText();
          });
        },
        attr: (name) => {
          return base.findElements(By.css(selector)).then((elements) => {
            if (!elements.length) {
              return undefined;
            }

            return elements[0].getAttribute(name);
          });
        },
        map: (fn) => {
          return base.findElements(By.css(selector)).then((elements) => {
            return bluebird.map(elements, (webElement) => {
              var ret = fn(_this.build$Interface(webElement));
              if (!ret.then) {
                return bluebird.props(ret);
              } else {
                return ret;
              }
            }).all();
          });
        }
      };
    };
  }

  next() {
    let _this = this;
    return this.workQueue.next()
      .then((queueItem) => {
        if (queueItem === undefined) {
          return true;
        }

        let val = _this.processItem(queueItem);
        return val
          .then(_this.next.bind(_this));
      });
  }
}

module.exports = Scraper;
