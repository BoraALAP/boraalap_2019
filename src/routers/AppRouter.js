import React from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "../components/global/Header";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";
import Ekar from "../pages/projects/Ekar";
import BonAPP from "../pages/projects/BonAPP";
import GridView from '../components/GridView'
import ListView from '../components/ListView'

import "../styles/Index.scss";

export default function AppRouter(props) {
  return (
    <div className="Website">
      <Route
        render={({ location }) => (
          <div>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                className="Content"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                timeout={2000}
              >
                <Switch location={location}>
                  <Route path="/" component={HomePage} 
                  exact/>
                  <Route path="/projects/Cottonist" component={Cottonist} />
                  <Route path="/projects/Ekar" component={Ekar} />
                  <Route path="/projects/BonAPP" component={BonAPP} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    </div>
  );
}
