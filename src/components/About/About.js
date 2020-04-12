import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import History from "../History/History";
import Contact from "../Contact/Contact";

export default class About extends Component {
  render() {
    const { path } = this.props.match;
    return (
      <div>
        <div className="subnav">
          <Link className="subnav_links" to={path}>
            About
          </Link>
          <Link className="subnav_links" to={`${path}/history`}>
            History
          </Link>
          <Link className="subnav_links" to={`${path}/contact`}>
            Contact
          </Link>
        </div>
        <div className="box">
          <Switch>
            <Route path={`${path}/history`} component={History} />
            <Route path={`${path}/contact`} component={Contact} />
            <Route
              exact
              path={path}
              render={() => {
                return (
                  <div>
                    <h1 className="title">About WestSide University:</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod eu lorem et ultricies. In porta lorem at dui
                      semper porttitor. Nullam quis cursus dui. Cras tincidunt
                      vehicula tellus eu facilisis. Donec nisi turpis, iaculis
                      et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac
                      blandit metus. Suspendisse potenti. Praesent elementum
                      diam non orci cursus rutrum. Pellentesque condimentum
                      ultrices dignissim. Sed a tempor ligula, vel luctus
                      sapien. Mauris vehicula rutrum massa. Duis condimentum, ex
                      quis ullamcorper rhoncus, erat libero tempor arcu,
                      condimentum facilisis tellus lectus ut nunc. Pellentesque
                      vitae faucibus diam. Vestibulum eu erat ex. Ut justo
                      neque, varius aliquet erat vel, scelerisque convallis
                      lacus. Mauris semper lorem mauris, sed dignissim eros
                      consectetur nec.
                    </p>
                  </div>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
