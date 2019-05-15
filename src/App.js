import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";
import TransitionStyles from "./styles/Transitions";


import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";

import { Context, appReducer, initialState } from "./data/store";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

import Work from "./pages/Work";

import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import Footer from "./components/global/Footer";

export default function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ store, dispatch }}>
          <Route
            render={({ location, history }) => (
              <>
                <Header />
                <Sidebar location={location} history={history} />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={2000}
                    classNames="transition"
                  >
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/work" component={Work} />
                      <Route path="/projects/Cottonist" render={routeProps => <Cottonist routeProps={routeProps} />} />
                      <Route path="/projects/Ekar" render={routeProps => <Ekar routeProps={routeProps} />} />
                      <Route path="/projects/BonAPP" render={routeProps => <BonAPP routeProps={routeProps} />} />
                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                <GlobalStyles />
                <TransitionStyles />
                
                <Footer />
              </>
            )}
          />
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
