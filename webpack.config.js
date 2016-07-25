'use strict';

const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const postCssCssNext = require('postcss-cssnext');

const config = {
  entry: {
    cphrain: './src/index.js',
    'cphrain-demo': './demo-src/index.js'
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
      }, {
        test: /\.css$/,
        loader: 'style!css!postcss'
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
  postcss() {
    return [
      postCssCssNext()
    ];
  },
  devtool: 'source-map'
};

module.exports = validate(config);
