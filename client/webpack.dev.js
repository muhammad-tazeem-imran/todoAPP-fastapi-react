const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '127.0.0.1',
    port: '3000',
    contentBase: './dist',
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: ['node_modules'],
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
