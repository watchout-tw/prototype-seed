/* es5 for webpack*/
"use strict";
var IS_PRODUCTION = (process.env.NODE_ENV === "production")? true: false;
var WEBPACK_DEV_SERVER_PORT = process.env.WEBPACK_DEV_SERVER_PORT || 2992;

var entry = (IS_PRODUCTION)?
   []
   : ["./node_modules/webpack-dev-server/client/index.js?http://localhost:" + WEBPACK_DEV_SERVER_PORT];
module.exports = {
  entry: entry.concat(["./app/app.es6"]),
  output: {
    path: __dirname + "/build",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|es6)$/, exclude:/node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(jpg|png)$/, loader: "url-loader"}
    ]
  },
  resolve: {
    extensions: ["", ".web.js", ".js", ".jsx", ".es6"]
  }
}