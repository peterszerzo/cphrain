'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const config = {
  entry: {
    demo: './demo-src/demo.js',
    cphrain: './src/index.js'
  },
  output: {
    path: path.resolve('./demo-build'),
    publicPath: '',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: process.env.NODE_ENV === 'production' ?
  [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
  :
  [],
  devtool: 'source-map'
};

module.exports = validate(config);
