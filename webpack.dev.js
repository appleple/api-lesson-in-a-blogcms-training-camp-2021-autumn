const { merge } = require('webpack-merge');
const prod = require('./webpack.prod.js');

process.env.BABEL_ENV = 'development';

module.exports = merge(prod, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: false,
    static: {
      directory: './',
    },
  },
});
