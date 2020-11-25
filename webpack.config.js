// webpack.config.js is special file for webpack reference
// webpack runs on node.js!
const path = require('path');

const config = {
  // entry point does
  // 1. first file to execute
  // 2. start module building process
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
};

module.exports = config;
