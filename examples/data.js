const fs = require('fs');

const stream = fs.createWriteStream('./out.log', { flags: 'a' });

module.exports = function (data) {
  // console.log('DATA', data);
  stream.write(`${JSON.stringify(data)}\n`);
};
