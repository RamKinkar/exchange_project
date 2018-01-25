var path = require('path');
var webpack = require('webpack');
var config = {
   entry: './main.js',
   output: {
      path:path.resolve(__dirname, 'build'),
      filename: 'index.js',
      publicPath: 'http://localhost:3000/',
   },
   devServer: {
      inline: true,
      port: 3000
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}
module.exports = config;