const { posix: { resolve } } = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const { NODE_ENV, PATH_PUBLIC } = process.env;
const environment = {};

const extractCss = () => (NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader');

module.exports = {
  mode: NODE_ENV,
  context: resolve(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: resolve(PATH_PUBLIC),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          extractCss(),
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(Object.keys(environment).reduce((env, key) => ({
      ...env,
      [key]: JSON.stringify(environment[key]),
    }), {})),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
