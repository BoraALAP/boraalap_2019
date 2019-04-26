import React, { useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";
import TransitionStyles from "./styles/Transitions";

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
        <Context.Provider value={{ store, dispatch }}>
          <Route
            render={({ location, history }) => (
              <>
                <Header data={Data} />
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
                      <Route path="/projects/Cottonist" component={Cottonist} />
                      <Route path="/projects/Ekar" component={Ekar} />
                      <Route path="/projects/BonAPP" component={BonAPP} />

                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                <GlobalStyles />
                <TransitionStyles />
              </>
            )}
          />
        </Context.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
