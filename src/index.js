const _ = require('lodash/fp');
const nodeUrl = require('url');

function parseUrl(url) {
  return _.omit(['search', 'hash'], nodeUrl.parse(url, true));
}

function setParams(url, params) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.assign(parsedUrl.query, params), parsedUrl)
  );
}

function filterParams(url, whitelist) {
  const parsedUrl = parseUrl(url);
  return nodeUrl.format(
    _.set('query', _.pick(whitelist, parsedUrl.query), parsedUrl)
  );
}

module.exports = {
  setParams,
  filterParams,
};
