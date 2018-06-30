const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app.css': path.resolve(__dirname, 'src/css/app.css'),
    'app.js': path.resolve(__dirname, 'src/js/app.js'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public/index.html'),
        filename: 'index.html',
        inject: 'head'
      }),
      new ExtractTextPlugin("app.css"),
      new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
      rules: [
        {
          test: /\.css/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader',
          }),
        },
      ],
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
  },
};
