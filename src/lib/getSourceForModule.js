const fs = require('fs');
const memoize = require('lodash/memoize');

module.exports = memoize(moduleName =>
  fs.readFileSync(require.resolve(moduleName), 'utf8'));
