import bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';
import _ from 'lodash/fp';
import matchExtension from './lib/matchExtension.js';
const ONE_HOUR = 3600000;

const SCRAPERS_DIR = path.resolve('./demo');

bluebird.promisifyAll(fs);

export default function getScrapers() {
  return fs.readdirAsync(SCRAPERS_DIR)
    .then(_.filter(matchExtension('.js')))
    // eslint-disable-next-line global-require
    .then(_.map((file) => require(path.join(SCRAPERS_DIR, file))))
    .then(_.map(Class => Class.default || Class))
    .then(_.map((Class) => {
      const obj = new Class();
      if (!obj.name) {
        obj.name = Class.name;
      }
      if (!obj.timeBetween) {
        obj.timeBetween = Class.timeBetween || ONE_HOUR;
      }
      return obj;
    }));
}
