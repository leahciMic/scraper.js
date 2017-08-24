const fs = require('mz/fs');
const path = require('path');
const _ = require('lodash/fp');

const recurseFiles = async (file) => {
  const stats = await fs.stat(file);

  if (stats.isFile()) {
    return path.resolve(file);
  }

  if (stats.isDirectory()) {
    const files = await fs.readdir(file);
    return files
      .filter(x => x.match(/\.js$/))
      .map(basename => path.resolve(file, basename));
  }

  return undefined;
};

module.exports = function filesParser(files) {
  return Promise.all(files.map(recurseFiles))
    .then(_.flatten);
};
