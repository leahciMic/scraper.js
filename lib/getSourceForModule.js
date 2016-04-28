import _ from 'lodash/fp';
import fs from 'fs';
import bluebird from 'bluebird';

const readFile = bluebird.promisify(fs.readFile);

export default _.memoize(
  (moduleName) => readFile(require.resolve(moduleName), 'utf8')
);
