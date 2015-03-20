import fs from "fs";
import Path from "path";
import {Router} from "express";
var basename  = Path.basename(module.filename);
var router = Router();

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    let routePath = "/" + Path.basename(file, Path.extname(file));
    var {path, routes} = require(`./${file}`);
    path = path || routePath;
    routes.forEach((route) => {
      var {method, handle} = route;
      let routePath = route.path || path;
      router[method.toLowerCase()](routePath, handle);
    });
  });

export default router;