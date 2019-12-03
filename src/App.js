import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";
import TransitionStyles from "./styles/Transitions";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";

import { Context, appReducer, initialState } from "./data/store";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

import ListView from "./components/ListView";
import GridView from "./components/GridView";

import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import AccentTranslations from "./pages/projects/AccentTranslations";
import TSA from "./pages/projects/TSA";

import Footer from "./components/global/Footer";
import { toTop } from "./components/GlobalFunctions";


export default function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  
  useEffect(() => {
    toTop()
  },[])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ store, dispatch }}>
          <Route
            render={({ location, history }) => (
              <>
                <Header />
                <Sidebar location={location} history={history} />
                
                    <Switch>
                      <Route exact path="/" component={HomePage} />
                      <Route path="/list" component={ListView} />
                      <Route path="/grid" component={GridView} />
                      <Route
                        path="/projects/Cottonist"
                        render={routeProps => (
                          <Cottonist routeProps={routeProps} />
                        )}
                      />
                      <Route
                        path="/projects/Ekar"
                        render={routeProps => <Ekar routeProps={routeProps} />}
                      />
                      <Route
                        path="/projects/BonAPP"
                        render={routeProps => (
                          <BonAPP routeProps={routeProps} />
                        )}
                      />
                      <Route
                        path="/projects/AccentTranslations"
                        render={routeProps => (
                          <AccentTranslations routeProps={routeProps} />
                        )}
                      />
                      <Route
                        path="/projects/TSA"
                        render={routeProps => (
                          <TSA routeProps={routeProps} />
                        )}
                      />
                      <Route component={NotFound} />
                    </Switch>
  
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
