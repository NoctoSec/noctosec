const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = (_, argv) => ({
  mode: argv.mode || 'production',
  entry: './src/main.js',
  devtool: false,
  output: {path: path.resolve(__dirname, 'dist'), filename: 'assets/[name].[contenthash:8].js', clean: true, publicPath: 'auto'},
  module: {rules: [{test: /\.css$/i, use: [MiniCssExtractPlugin.loader, {loader:'css-loader',options:{sourceMap:false}}]}]},
  plugins: [new HtmlWebpackPlugin({template:'src/index.html', minify: argv.mode === 'production'}),new MiniCssExtractPlugin({filename:'assets/[name].[contenthash:8].css'})],
  devServer: {port: 3000, hot: true, historyApiFallback: true, client:{overlay:true}},
  optimization: {minimize: argv.mode === 'production'}
});
