import React from "react";
import Router, {RouteHandler, State} from "react-router";

export default React.createClass({
  displayName: "Application",

  render() {

    return (
      <div>
        Hello World
        <RouteHandler {...this.props} {...this.state} />
      </div>
    );
  }
});