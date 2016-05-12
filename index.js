import { EventEmitter } from 'events';
import _ from 'lodash/fp';
import nodeUrl from 'url';

export class Scraper extends EventEmitter {
  constructor({ queue, store } = {}) {
    if (!queue) {
      throw new Error('Scraper expects a queue');
    }
    if (!store) {
      throw new Error('Scraper expects a store');
    }
    this._queue = queue;
    this._store = store;
  }
  queue(url, method) {
    const queueItem = { url, method };
    const filteredUrl = this.filterQueueItem ? this.filterQueueItem(queueItem) : undefined;
    if (filteredUrl !== undefined) {
      queueItem.url = filteredUrl;
    }
    return this._queue(this.name, url, method);
  }
  data(data) {
    this.emit('data', data);
  }
}

function parseUrl(url) {
  return _.omit(['search', 'hash'], nodeUrl.parse(url, true));
}

export function setParams(url, params) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.assign(parsedUrl.query, params), parsedUrl)
  );
}

export function filterParams(url, whitelist) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.pick(whitelist, parsedUrl.query), parsedUrl)
  );
}
