const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =  merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({ inject: true })
  ],
  devServer: {
    port: 5000,
    headers: {"Access-Control-Allow-Origin": "*"}
  },
});