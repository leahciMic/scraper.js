const program = require('commander');

program.version(require('./package.json').version)
  .option('-q, --queue <queue>', 'Use this queue plugin [memory]')
  .option('-d, --data <data>', 'Use this data plugin')
  .option('-c, --cache <cache>', 'Use this url cache provider')
  .parse(process.argv);

if (!program.queue || !program.data) {
  program.help();
}

const dataPlugin = require(program.data);
const queuePlugin = require(program.queue);
const cachePlugin = require(program.cache);
