const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const { smart } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common');

dotenv.config();

const { PORT, PATH_SOURCE } = process.env;

module.exports = smart(common, {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
            },
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    port: PORT,
    hot: true,
    hotOnly: true,
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: 'index.html',
        },
      ],
    },
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PATH_SOURCE, 'index.html'),
    }),
  ],
});
