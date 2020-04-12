import React, { Component } from "react";

import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div>WestSide University</div>
          <div className="link-wrap">
            <div className="links">Home</div>
            <div className="links">About</div>
          </div>
        </nav>
        <Routes />
      </div>
    );
  }
}
