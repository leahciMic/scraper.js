'use strict';

const bluebird = require('bluebird');

module.exports = {
  createClient() {
    const memory = {};

    const reset = () => {
      memory.hashes = {};
      memory.lists = {};
    };

    const getHash = (key) => {
      if (!memory.hashes[key]) {
        memory.hashes[key] = {};
      }

      return memory.hashes[key];
    };

    const getList = (key) => {
      if (!memory.lists[key]) {
        memory.lists[key] = [];
      }

      return memory.lists[key];
    };

    afterEach(reset);
    reset();

    return {
      reset: reset,
      hsetnxAsync(key, attr, value) {
        const hash = getHash(key);

        if (hash[attr]) {
          return bluebird.resolve(0);
        }

        hash[attr] = value;
        return bluebird.resolve(1);
      },

      hgetAsync(key, attr) {
        const hash = getHash(key);

        return bluebird.resolve(hash[attr] || null);
      },

      lpushAsync(key, value) {
        const list = getList(key);
        list.unshift(value);
        return bluebird.resolve(list.length);
      },

      llenAsync(key) {
        return bluebird.resolve(getList(key).length);
      },

      rpoplpushAsync(key1, key2) {
        if (!memory.lists[key1]) {
          return bluebird.resolve(null);
        }

        const list1 = getList(key1);
        const list2 = getList(key2);

        const value = list1.pop();

        list2.unshift(value);

        return bluebird.resolve(value);
      }
    };
  }
};
