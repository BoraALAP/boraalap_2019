import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";

export default function AppRouter(props) {
  const [state, setState] = useState({
    sideBar: false,
    currentPage: ""
  });

  console.log(props);
  

  return (
    <div className="Website">
      <Header />
      <Sidebar />
      <div className="Content">
        <Switch>
          <Route
            path="/"
            render={routeProps => (
              <HomePage {...routeProps} 
            />
            )}
            exact={true}
          />
          <Route
            path="/projects/Cottonist"
            render={routeProps => (
              <Cottonist
                {...routeProps}
              />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}
