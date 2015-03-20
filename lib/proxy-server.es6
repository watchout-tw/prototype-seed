import http from "http";
import HttpProxy from "http-proxy";
import serverCallback from "../server";

const PORT = process.env.PORT || 3000;

const targetProxy = new HttpProxy.createProxyServer({
  target: {
    host: "localhost",
    port: process.env.WEBPACK_DEV_SERVER_PORT || 2992
  },
});

const config = require("../webpack.config");
const re = new RegExp(config.output.publicPath);

const hostServer = http.createServer(function (req, res) {
  var url = req.url;
  var isWebpackDevServerRequest = re.test(url) || /hot-update.js(on)?$/.test(url);
  // debug(url, isWebpackDevServerRequest);

  if (isWebpackDevServerRequest) {
    console.log("Webpack Request", url);
    targetProxy.web(req, res);
  } else {
    console.log("Normal Request", url);
    serverCallback(req, res);
  }
});

//
// Listen to the `upgrade` event and proxy the
// WebSocket requests as well.
//
hostServer.on("upgrade", function (req, socket, head) {
  targetProxy.ws(req, socket, head);
});

hostServer.listen(PORT, () => {
  console.log(`Server Listen on ${PORT}`);
});
