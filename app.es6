var IS_PRODUCTION = (process.env.NODE_ENV === "production")? true: false;
import http from "http";
import app from "./server";

const port = process.env.PORT || 3000;

if (IS_PRODUCTION) {
  http.createServer(app).listen(port, () => {
    console.log(`Server Listen on ${port}`);
  });
} else {

  var WebpackDevServer = require("webpack-dev-server");
  var config = require("./webpack.config");
  var compiler = require("webpack")(config);
  var nodemon = require('nodemon');

  var server = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,
    stats: { colors: true }
  });

  server.listen( process.env.WEBPACK_DEV_SERVER_PORT || 2992, "localhost", function() {
    nodemon({
      script: 'lib/proxy-server.es6',
      watch: ['server', 'lib'],
      execMap: {
        "es6": "babel-node"
      }
    });
    nodemon.on('start', function () {
      console.log('App has started');
    }).on('quit', function () {
      console.log('App has quit');
    }).on('restart', function (files) {
      console.log('App restarted due to: ', files);
    });
  });
  // require("./lib/proxy-server").listen(app, port);
}
