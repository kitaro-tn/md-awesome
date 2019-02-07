const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    filename: 'md-awesome.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};
