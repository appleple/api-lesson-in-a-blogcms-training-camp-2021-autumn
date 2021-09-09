const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  cache: true,
  target: ['web', 'es5'],
  entry: {
    bundle: `${__dirname}/src/index.js`,
  },
  output: {
    path: `${__dirname}/dest/`,
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // ESLint
    new ESLintPlugin({
      context: './src',
      extensions: ['js'],
      exclude: ['/node_modules/'],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      fix: true,
    }),
    new Dotenv(),
  ],
};
