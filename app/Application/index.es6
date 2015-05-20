import React from "react";
import Router, {RouteHandler, State} from "react-router";

export default React.createClass({
  displayName: "Application",

  render() {

    return (
      <div>
        Hello World
        <i className="fa fa-smile-o"></i>
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});