import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { jsx, css, Global } from "@emotion/core";

import GlobalStyle from "./GlobalStyle";
import Scroll from "./Scroll/Scroll";
import Chain from "./Chain/Chain";
import Test from "./Test/Test";

const Routes = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Test} />
        <Route exact path="/scroll" component={Scroll} />
        <Route exact path="/chain" component={Chain} />
      </Switch>
    </Router>
  );
};

export default Routes;
