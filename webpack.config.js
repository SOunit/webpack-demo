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
  // loader, module, rules system of webpack
  // babel-loader gives some pre-process
  // module: {
  //   rules: [{ use: 'babel-loader', test: /¥.js$/ }],
  // },
};

module.exports = config;
