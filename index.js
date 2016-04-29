import { EventEmitter } from 'events';

export class Scraper extends EventEmitter {
  queue(url, method) {
    this.emit('queue', {
      url,
      method,
    });
  }
  data(data) {
    this.emit('data', data);
  }
}
