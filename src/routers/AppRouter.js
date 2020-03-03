import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/contact" component={Contact} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
