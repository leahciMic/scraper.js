const webpack = require('webpack');
const MemoryFS = require('memory-fs');
const path = require('path');

module.exports = function compileForBrowser(pathToProgram, context) {
  const filename = path.basename(pathToProgram).replace(/\.js$/, '');

  const fs = new MemoryFS();

  const compiler = webpack({
    mode: 'development',
    entry: pathToProgram,
    context,
    module: {
      rules: [{ test: /\.buff$/, loader: 'arraybuffer-loader' }],
    },
    output: {
      path: '/',
      filename: 'bundle.js',
      library: filename,
      libraryTarget: 'window',
      libraryExport: 'default',
    },
  });

  compiler.outputFileSystem = fs;
  return new Promise((resolve, reject) => {
    compiler.run((err) => {
      if (err) {
        reject(err);
      } else {
        try {
          const content = fs.readFileSync('/bundle.js', 'utf8');
          resolve(content);
        } catch (e) {
          reject(e);
        }
      }
    });
  });
};
