const fs = require('fs');
const path = require('path');
const memoize = require('lodash/memoize');

module.exports = memoize(() =>
  fs.readFileSync(path.join(__dirname, 'jquery.min.js'), 'utf8'));
