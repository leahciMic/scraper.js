const program = require('commander');

program
  .version(require('../../package.json').version)
  .option('-q, --queue <file>', 'Use this queue plugin [memory]')
  .option('-d, --data <file>', 'Use this data plugin')
  .option('-c, --concurrency <number>', 'How many browser instances to use', x => Number(x), 1)
  .parse(process.argv);

if (!program.queue) {
  console.warn('--queue not specified, defaulting to pre-installed scraper.js-queue-bull');
  program.queue = 'scraper.js-queue-bull';
}

if (!program.data) {
  console.warn('--data not specified, defaulting to ./data.js');
  program.data = './data.js';
}

module.exports = program;
