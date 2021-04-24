const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { IgnorePlugin } = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
const sassModuleRegex = /\.module.s[ac]ss$/i
const sassRegex = /\.s[ac]ss$/i

module.exports = {
  output: {
    filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.[hash].js',
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
        test: sassModuleRegex,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: false, modules: true },
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: false },
          },
        ],
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: false},
          },
          {
            loader: 'postcss-loader',
            options: { ident: 'postcss', sourceMap: false },
          },
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
    new MiniCssExtractPlugin({
      filename: !isProduction ? '[name].css' : '[name].[hash].css',
      chunkFilename: !isProduction ? '[id].css' : '[id].[hash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './assets/favicon.ico',
    }),
    new Dotenv({
      path: `./.env${isProduction ? '' : '.development'}`,
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
