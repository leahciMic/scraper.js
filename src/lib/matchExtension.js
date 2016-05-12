import _ from 'lodash/fp'
import path from 'path';

export default _.curry(
  (extname, filename) => path.extname(filename) === extname
);
