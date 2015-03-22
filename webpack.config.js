/* es5 for webpack*/
"use strict";
var webpack = require("webpack");
var IS_PRODUCTION = (process.env.NODE_ENV === "production")? true: false;
var WEBPACK_DEV_SERVER_PORT = process.env.WEBPACK_DEV_SERVER_PORT || 2992;

var entry = (IS_PRODUCTION)?
   []
   : [ 'webpack-dev-server/client?http://localhost:' + WEBPACK_DEV_SERVER_PORT, 'webpack/hot/only-dev-server' ];
var es6Loaders = (IS_PRODUCTION)?
  []
  : ["react-hot"];

module.exports = {
  entry: entry.concat(["./app/app.es6"]),
  output: {
    path: __dirname + "/build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|es6)$/, exclude:/node_modules/, loaders: es6Loaders.concat(["babel-loader"]) },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loader: "url-loader"}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ["", ".web.js", ".js", ".jsx", ".es6"]
  }
}