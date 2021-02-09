// webpack.config.js is special file for webpack reference
// webpack runs on node.js!
const path = require('path');

const config = {
  // entry point does
  // 1. first file to execute
  // 2. start module building process
  entry: './src/index.js',
  output: {
    // __dirname is node constant variable
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  // loader, module, rules system of webpack
  module: {
    rules: [
      {
        // babel-loader gives some pre-process
        use: 'babel-loader',
        test: /¥.js$/,
      },
      {
        // from right to left!!!
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
};

module.exports = config;
