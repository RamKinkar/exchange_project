var path = require('path');
var webpack = require('webpack');
var config = {
   entry: './main.js',
   output: {
      path:path.resolve(__dirname, 'build'),
      filename: 'index.js',
      // publicPath: 'http://localhost:3000/',
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
         },
         {
           test: /\.css$/,
           exclude: /node_modules/,
           loader: 'style-loader!css-loader?localIdentName=[name]__[local]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
         },
         {
           test: /\.css$/,
           include: /node_modules/,
           loaders: ['style-loader', 'css-loader']
         },
         {
           test: /\.(png|jpg|jpeg|gif)$/,
           exclude: /node_modules/,
           loader: 'url-loader?limit=2050000'
         }
      ]
   }
}
module.exports = config;