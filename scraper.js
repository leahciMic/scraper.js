'use strict';

const bluebird = require('bluebird');
const EventEmitter = require('events').EventEmitter;
const WorkQueue = require('./lib/work-queue.js');
const Store = require('./lib/store.js');
const uuid = require('node-uuid');
const webdriverio = require('webdriverio-jquery');
const warn = require('debug')('scraperjs:warn');
const error = require('debug')('scraperjs:error');
const debug = require('debug')('scraperjs:debug');

class Scraper {
  constructor(config) {
    config = config || {};

    this.workQueue = new WorkQueue({
      id: config.name || 'anonymous-' + uuid()
    });

    if (!config.empty) {
      error('missing empty function');
      throw new Error('missing empty function');
    }

    // lexical scoping (fat arrows) does not quite work properly in iojs 2.5.0
    // @todo remove this when v8 supports fat arrows and it's on by default
    let _this = this;

    this.config = config;
  }

  createClient(options) {
    debug('create webdriverio client');
    this.client = webdriverio(options);
  }

  init() {
    let options = { desiredCapabilities: { browserName: 'firefox' } };
    this.createClient(options);

    if (this.config.init) {
      debug('running scraper init function');
      let promise = this.config.init();

      if (!promise || !promise.then) {
        error('init did not return a thenable');
        throw new Error('init must return a thenable');
      }
      return promise;
    }

    return bluebird.resolve();
  }

  checkForEmptyQueue() {
    debug('checking for empty queue');

    return bluebird
      .bind(this)
      .return(this.workQueue)
      .call('length')
      .then((length) => {
        if (length === 0) {
          debug('queue was empty');
          var promise = this.config.empty();
          if (!promise || !promise.then) {
            error('empty function did not return a promise');
            throw new Error('empty function should return a promise');
          }

          debug('check if empty function added anything');
          return promise.return(this.workQueue)
            .call('length')
            .then((length) => {
              if (length === 0) {
                error('empty function did not add any jobs');
                throw new Error(
                  'empty function did not add any jobs to the queue. it ' +
                  'must add at least one job and resolve once the job has ' +
                  'been added to the queue.'
                );
              }
              debug('empty function added', length, 'jobs');
            });
        }
      });
  }

  run() {
    debug('creating a new store');
    this.store = new Store();

    return bluebird.join(this.init())
      .bind(this)
      .then(this.checkForEmptyQueue)
      .then(this.next)
      .then(this.client.end.bind(this.client))
      .then(this.workQueue.end.bind(this.workQueue))
      .catch(function(err) {
        error('An error occurred', err);
        throw err;
      });
  }

  processItem(queueItem) {
    let self = this;

    debug('waiting for client, then navigating to', queueItem.url);

    return this.client.then(() => {}).url(queueItem.url)
      .then(function() {
        debug('finished loading', queueItem.url);
        // call the function with the metadata specified
        if (!self.config[queueItem.fn]) {
          error('could not find function', queueItem.fn);
          throw new Error(
            'the function \'' + queueItem.fn + '\' does not exist on the scraper'
          );
        }
        debug('calling', queueItem.fn, 'with jQuery like interface');
        let $ = self.client.find.bind(self.client);
        return self.config[queueItem.fn]($, queueItem.meta);
      });
  }

  next() {
    debug('fetching next job');
    let _this = this;
    return this.workQueue.next()
      .then((queueItem) => {
        if (queueItem === undefined) {
          debug('no more jobs left');
          return true;
        }
        debug('processing job');
        let val = _this.processItem(queueItem);
        return val
          .then(_this.next.bind(_this));
      });
  }
}

module.exports = Scraper;
