import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/global/Header";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";
import Ekar from "../pages/projects/Ekar";
import Sidebar from "../components/global/Sidebar";



export default class AppRouter extends React.Component {

  routeChange = () => {
    console.log("changed")
  }

  render() {
    return (
      <div>
        <Router onChange={this.routeChange}>
          <div>
            <Header />
            <Sidebar sideBar={true} />
            <div className="Content">
              <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

