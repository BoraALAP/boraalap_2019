import React from "react";
import { Route, Switch } from "react-router-dom";
import { Router, IndexRoute } from "react-router";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";
import Ekar from "../pages/projects/Ekar";
import BonAPP from "../pages/projects/BonAPP";

export default function AppRouter(props) {
  return (
    <div className="Website">
      <Route
        render={({ location }) => (
          <div>
          <Header />
          <Sidebar location={location} />
          <Switch location={location}>
            <Route
              path="/"
              render={routeProps => <HomePage {...routeProps} />}
              exact={true}
            />
            <Route
              path="/projects/Cottonist"
              render={routeProps => <Cottonist {...routeProps} />}
            />
            <Route
              path="/projects/Ekar"
              render={routeProps => <Ekar {...routeProps} />}
            />
            <Route
              path="/projects/BonAPP"
              render={routeProps => <BonAPP {...routeProps} />}
            />
            <Route component={NotFound} />
          </Switch>
          </div>
        )}
      />
    </div>
  );
}
