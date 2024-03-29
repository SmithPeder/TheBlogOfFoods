const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: "./client/index.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.resolve("dist"),
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  node: {
    fs: "empty"
  }
};
