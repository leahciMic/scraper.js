'use strict';

const objectPath = require('object-path');
const bluebird = require('bluebird');

class Store {
  constructor() {
    this.store = {};
  }

  save(key, value) {
    return bluebird.join(objectPath.set(this.store, key, value));
  }

  getAll() {
    console.log('store', this.store);
    return bluebird.join(this.store);
  }
}

module.exports = Store;
