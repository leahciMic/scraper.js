'use strict';

const bluebird = require('bluebird');
const EventEmitter = require('events').EventEmitter;
const WorkQueue = require('./lib/work-queue.js');
const Store = require('./lib/store.js');
const uuid = require('node-uuid');
const webdriverio = require('webdriverio-jquery');

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
    this.store = new Store();
  }

  init() {
    console.log('init');
    let options = { desiredCapabilities: { browserName: 'firefox' } };
    this.client = webdriverio(options);

    if (this.config.init) {
      let promise = this.config();

      if (!promise || !promise.then) {
        throw new Error('init must return a thenable');
      }
      return promise;
    }

    return bluebird.resolve();
  }

  checkForEmptyQueue() {
    console.log('check for empty queue');
    return bluebird
      .bind(this)
      .return(this.workQueue)
      .call('length')
      .then((length) => {
        console.log(length);
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
  }

  run() {
    return bluebird.join(this.init())
      .bind(this)
      .then(this.checkForEmptyQueue)
      .then(this.next)
      .then(this.client.end.bind(this.client))
      .then(this.workQueue.end.bind(this.workQueue));
  }

    // do the init


    // check if the queue is empty

    // run the next task

  processItem(queueItem) {
    // the queue is empty
    // redirect browser there and wait
    let _this = this;

    console.log('visit', queueItem.url);

    let self = this;

    return this.client.then(() => {}).url(queueItem.url)
      .then(function() {
        // call the function with the metadata specified
        if (!self.config[queueItem.fn]) {
          throw new Error(
            'the function \'' + queueItem.fn + '\' does not exist on the scraper'
          );
        }

        let $ = self.client.find.bind(self.client);
        return self.config[queueItem.fn]($, queueItem.meta);
      });
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
