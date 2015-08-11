'use strict';

const Redis = require('redis');
const bluebird = require('bluebird');
const redis = bluebird.promisifyAll(Redis.createClient());

class WorkQueue {
  constructor(config) {
    if (!config.id) {
      throw new Error('workqueue requires an identifier');
    }

    this.config = config;
  }

  end() {
    redis.end();
  }

  getQueueNS() {
    return this.config.id + ':queue';
  }

  getInProgressNS() {
    return this.config.id + ':inprogress';
  }

  getLinkNS(url) {
    return this.config.id + ':url-' + url;
  }

  push(url, fn, metaData) {
    const promises = {
      fn: redis.hsetnxAsync(this.getLinkNS(url), 'fn', fn),
      status: redis.hsetnxAsync(this.getLinkNS(url), 'status', 'queued')
    };

    if (metaData) {
      promises.metaData = redis.hsetnxAsync(
        this.getLinkNS(url),
        'meta',
        JSON.stringify(metaData || {})
      );
    }

    return bluebird.props(promises).bind(this).then((success) => {
      if (success.status) {
        return redis.lpushAsync(this.getQueueNS(), url);
      }

      throw new Error(url + ' is already in the queue');
    });
  }

  length() {
    return redis.llenAsync(this.getQueueNS());
  }

  next() {
    // we'll return a promise that resolves to undefined if there is nothing
    // left in the queue

    // otherwise we'll return a queueItem that looks like:
    // {
    //   url,
    //   fn,
    //   meta
    // }

    return redis.rpoplpushAsync(
      this.getQueueNS(),
      this.getInProgressNS()
    ).bind(this).then((url) => {
      if (!url) {
        return undefined;
      }

      var queueItem = {
        url: url,
        fn: redis.hgetAsync(this.getLinkNS(url), 'fn'),
        meta: redis.hgetAsync(this.getLinkNS(url), 'meta').then(JSON.parse).catch(() => {
          return {};
        })
      };

      return bluebird.props(queueItem);
    });
  }
}

module.exports = WorkQueue;
