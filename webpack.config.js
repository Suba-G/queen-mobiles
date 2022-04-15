"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appMode = process.env.environment === "production" ? "production" : "development";

let reactScript = '<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>';
let reactDomScript = '<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>';

if (appMode === "production") {
  reactScript = '<script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>';
  reactDomScript = '<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>';
}

module.exports = {
  mode: appMode,
  entry: "./client/app.jsx",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "estore.bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/app.html",
      filename: "estore.html",
      favicon: "./client/assets/images/Omega_Logo.svg",
      templateParameters: {
        reactScript,
        reactDomScript,
      },
    }),
  ],
};
