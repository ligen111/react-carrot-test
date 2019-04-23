const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './src/test.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        // loader:'babel',
        // query: {
        //   presets: ['es2015', 'react']
        // },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  externals: [nodeExternals()],
  query: {
    presets: ['es2015', 'react']
  },
};
