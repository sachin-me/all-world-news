const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node-modules/',
        use: ["babel-loader"]
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "All World News",
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}