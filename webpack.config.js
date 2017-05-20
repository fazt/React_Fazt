const path = require('path');

module.exports = {
  entry: './first-component.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules|bower_components/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
