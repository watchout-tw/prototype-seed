import express from "express";

var app = express();

app.use(require("body-parser").json());
app.use("/api", require("./api"));

app.use('/build', express.static( __dirname + "/build"));

app.get('/', (req, res) => {
  var fs = require("fs");
  var html = fs.readFileSync(__dirname + "/../app/index.html", {encoding: 'utf-8'});
  return res.send(html);
});

export default app;