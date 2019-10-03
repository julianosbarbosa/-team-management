import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main/index";
import SignIn from "../pages/Auth/SignIn/index";
import SignUP from "../pages/Auth/SignUP/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUP} />
      <Route path="/" exact component={Main} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
