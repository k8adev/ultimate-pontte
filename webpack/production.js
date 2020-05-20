const dotenv = require('dotenv');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const common = require('./common');

module.exports = merge.smart(common, {
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
