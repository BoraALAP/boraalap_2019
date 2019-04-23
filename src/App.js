import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";

import Data from "./data/data";
import { Context, appReducer, initialState } from "./data/store";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import Work from "./pages/Work";

export default function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    return () => {
      dispatch({ type: "SAVE_PROJECTS", Data })}
  }, []);
  

  //   document
  //     .querySelector(".Active")
  //     .scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  //   document
  //     .querySelector(".Active")
  //     .scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Route
            render={({ location, history }) => (
              <Context.Provider value={{ store, dispatch }}>
                <Header data={Data} />
                <Sidebar location={location} history={history} />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    transitionEnterTimeout={0}
                    timeout={100}
                  >
                    <Switch>
                      <Route
                        path="/"
                        component={HomePage}
                        exact
                      />
                      <Route path="/work" component={Work} />
                      <Route path="/projects/Cottonist" component={Cottonist} />
                      <Route path="/projects/Ekar" component={Ekar} />
                      <Route path="/projects/BonAPP" component={BonAPP} />

                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                <GlobalStyles />
              </Context.Provider>
            )}
          />
        
      </ThemeProvider>
    </BrowserRouter>
  );
}
