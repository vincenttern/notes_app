import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";

// import Navbar from "./components/navbar.component";
// import ExerciseList from "../components/db/ExerciseList";
import EditNote from "../components/db/EditNote";
import CreateNote from "../components/db/CreateNote";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/contact" component={Contact} exact={true} />
      <Route path="/edit/:id" component={EditNote} exact={true} />
      <Route path="/add-note" component={CreateNote} exact={true} />

      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
