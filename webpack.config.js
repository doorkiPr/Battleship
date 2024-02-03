const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src/template.html" }],
    }),
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      title: "",
    }),
  ],
};

module.exports = config;
