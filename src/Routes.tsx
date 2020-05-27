import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Scroll from "./Scroll/Scroll";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Scroll} />
      </Switch>
    </Router>
  );
};

export default Routes;
