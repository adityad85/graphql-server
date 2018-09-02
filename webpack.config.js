const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  target: 'node',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  devtool: 'source-map',
  externals: [nodeExternals()],
};
