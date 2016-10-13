const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: './dist/bundle.js'
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.(njk|nunjucks)$/,
        loader: 'nunjucks-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
};
