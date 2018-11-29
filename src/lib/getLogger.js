const path = require('path');

let logger = {
  log: console.log.bind(console),
};
try {
  const file = path.join(process.cwd(), '/logger.js');
  console.log('Loading ', file);
  logger = require(file);
} catch (err) {
  console.error(err);
}

module.exports = logger;
