const fs = require('fs');
const path = require('path');

const pathTo = process.env.URL_LOG_PATH || path.join(process.cwd(), 'scrape-history.log');

module.exports = () => {
  const stream = fs.createWriteStream(pathTo, 'a');

  process.on('beforeExit', () => { stream.close(); });

  return objToLog => stream.write(`${JSON.stringify(objToLog)}\n`);
};
