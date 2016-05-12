var nodeExternals = require('webpack-node-externals');

module.exports = {
  context: __dirname,
  entry: {
    main: './run.js',
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'run.js',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
  module: {
    noParse: /node_modules\//,
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'] },
      { test: /\.json$/, loader: 'json-loader' },
    ],
  },
  target: 'node',
};
