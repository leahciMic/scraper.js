const program = require('commander');

program
  .version(require('../../package.json').version)
  .option('-q, --queue <file>', 'Use this queue plugin [memory]')
  .option('-d, --data <file>', 'Use this data plugin')
  .option('-c, --concurrency <number>', 'How many browser instances to use', x => Number(x), 1)
  .parse(process.argv);

if (!program.queue || !program.data) {
  program.help();
  process.exit();
}

module.exports = program;
