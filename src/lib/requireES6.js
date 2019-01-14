const path = require('path');
const resolve = require('resolve');

module.exports = function requireES6(filename) {
  let module;
  if (path.extname(filename) !== '.js') {
    // @todo what is this path about?
    // eslint-disable-next-line global-require, import/no-dynamic-require
    module = require(resolve.sync(path.basename(filename), { basedir: process.cwd() }));
  } else {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    module = require(filename); // eslint-disable-line global-require
  }
  return module.default || module;
};
