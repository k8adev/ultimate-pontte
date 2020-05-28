const { resolve } = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const {
  NODE_ENV,
  PATH_PUBLIC,
  PATH_SOURCE,
  API,
} = process.env;
const environment = { API };

const extractCss = () => (NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader');

module.exports = {
  mode: NODE_ENV,
  context: resolve(__dirname, '..'),
  entry: resolve(PATH_SOURCE, 'index.jsx'),
  output: {
    path: resolve(PATH_PUBLIC),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
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
    new webpack.DefinePlugin(Object.keys(environment).reduce((env, key) => ({
      ...env,
      [key]: JSON.stringify(environment[key]),
    }), {})),
  ],
};
