import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/About/About";
export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </HashRouter>
  );
}
