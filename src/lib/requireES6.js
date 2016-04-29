import path from 'path';
import resolve from 'resolve';

export default function requireES6(filename) {
  let module;
  if (path.extname(filename) !== '.js') {
    // @todo what is this path about?
    // eslint-disable-next-line global-require
    module = require(resolve.sync(path.basename(filename), { basedir: process.cwd() }));
  } else {
    module = require(filename); // eslint-disable-line global-require
  }
  return module.default || module;
}
