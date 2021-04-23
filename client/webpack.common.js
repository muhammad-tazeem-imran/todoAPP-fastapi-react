const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { IgnorePlugin } = require('webpack');

const mode = process.env.NODE_ENV;

module.exports = {
  output: {
    filename: mode === 'production' ? 'bundle.[contenthash].js' : 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    pathinfo: false, /* Optimization feature to remove garbage collection */
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ['@babel/preset-react', { targets: "defaults" }],
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|png|svg|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          outputPath: 'assets/images',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './assets/favicon.ico',
    }),
    new Dotenv({
      path: `./.env${mode === 'production' ? '' : '.development'}`,
    }),
    new IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
  performance: {
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
};
