const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//searches for .env file, loads all variables defined as a global varialble accessible by process.env
require('dotenv').config();
module.exports = {
  //specifies which directory to look for files
  context: path.join(__dirname, 'src'),
  //whatwg-fetch - polyfill for fetch. tells webpack to load the polyfill and then start building the dependency graph from index.js
  entry: ['whatwg-fetch', './index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            //So I don't have to explicitly bind callbacks in the constructor for methods/ can use => functions
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread'
            ]
          }
        }
      },
      {
        test: /\.m?css$/,
        //loaders are applied from last -first
        loader: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        //all files that match this config will be copied to dist folder
        test: /\.m?(png|jpeg|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    //search for keywords & replace with corresponding value
    new webpack.DefinePlugin({
      API_URL: JSON.stringify(process.env.API_URL)
    })
  ]
};
