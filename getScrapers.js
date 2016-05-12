import _ from 'lodash/fp';
import filesParser from './lib/filesParser.js';
const ONE_HOUR = 3600000;

const initializeScraper = (Class) => {
  const obj = new Class();
  obj.name = obj.name || Class.name;
  obj.timeBetween = Class.timeBetween || ONE_HOUR;
  if (!obj.name) {
    throw new Error('name must exist');
  }

  if (typeof obj.timeBetween !== 'number') {
    throw new Error('timeBetween was not a number');
  }

  return obj;
};

export default function getScrapers(files) {
  return filesParser(files)
    .then(_.map(file => require(file))) // eslint-disable-line global-require
    .then(_.map(Class => Class.default || Class))
    .then(_.map(initializeScraper));
}
