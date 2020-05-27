const path = require('path');
const dotenv = require('dotenv');
const { smart } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./common');

dotenv.config();

const { PATH_SOURCE } = process.env;

module.exports = smart(common, {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PATH_SOURCE, 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new TerserWebpackPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        commons: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
        },
      },
    },
  },
});
