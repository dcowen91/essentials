const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevMode = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDevMode ? "development" : "production",
  entry: "./src/index.tsx",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist",
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
