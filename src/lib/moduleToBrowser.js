const browserify = require('browserify');

module.exports = function importModule(moduleName) {
  return new Promise((resolve) => {
    const b = browserify(require.resolve(moduleName), { standalone: moduleName });
    const stream = b.bundle();
    let buffer = '';

    stream.on('data', (data) => { buffer += data; });
    stream.on('end', () => resolve(buffer));
  });
};
