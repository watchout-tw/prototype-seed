import React from "react";
import Router, {RouteHandler, State} from "react-router";

export default React.createClass({
  displayName: "Application",

  render() {
    var img = require('./miu.jpg');
    return (
      <div>
        Hello World
        <i className="fa fa-smile-o"></i>
        <img src={img}/>
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});