import bluebird from 'bluebird';
import fs from 'fs';
import path from 'path';
import _ from 'lodash/fp';

bluebird.promisifyAll(fs);

export default function filesParser(files) {
  return bluebird.all(files.map(file => fs.statAsync(file).then((stats) => {
    if (stats.isFile()) {
      return path.resolve(file);
    }

    if (stats.isDirectory()) {
      return fs.readdirAsync(file)
        .then(_.filter(x => x.match(/\.js$/)))
        .then(_.map(basename => path.resolve(file, basename)));
    }

    return undefined;
  }))).then(_.flatten);
}
