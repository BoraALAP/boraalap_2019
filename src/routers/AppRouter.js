import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";

export default function AppRouter() {
  const [state, setState] = useState({
    sideBar: true
  })

  const goIntoProject = () => {
    console.log('yay')
  };

  return (
    <div>
      <Router>
        <div>
        <Header />
        <Sidebar sideBar={state.sideBar} />
        <div className="Content">
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route
              path="/projects/Cottonist"
              render={(routeProps) => (<Cottonist {...routeProps} changeSideBar={goIntoProject}/>)}
              exact={true}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
        </div>
      </Router>
      
    </div>
  );
}

