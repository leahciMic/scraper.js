import { EventEmitter } from 'events';

export class Scraper extends EventEmitter {
  queue(url, method) {
    console.log(this, 'this is this');
    debugger
    this.emit('queue', {
      url,
      method,
    });
  }
}
