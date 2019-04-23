import React, { useState, useEffect, useContext, useReducer } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";

import Data from "./data/data";
import appReducer from "./data/reducers";
import StateContext from "./data/stateContext";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import Work from "./pages/Work";

export default function App(props) {
  const state = useContext(StateContext);
  const [newstate, dispatch] = useReducer(appReducer, state);
  // const [workView, setWorkView] = useState(undefined);

  console.log(state);

  // const onGridView = () => {
  //   setWorkView(workView => "grid");
  // };

  // const clearIcon = () => {
  //   setWorkView(workView => undefined);
  // };

  // const onListView = () => {
  //   setWorkView(workView => "list");
  // };

  // const [projects, setSlides] = useState([]);
  
  dispatch({ type: "SAVE_PROJECTS", Data });
    console.log(newstate);
  useEffect(() => {
    
  }, []);

  
  

  // const [slideNum, setSlideNum] = useState({
  //   activeNum: 0
  // });

  // const prevSlide = () => {
  //   setSlideNum({
  //     activeNum:
  //       slideNum.activeNum === 0 ? projects.length - 1 : slideNum.activeNum - 1
  //   });
  //   document
  //     .querySelector(".Active")
  //     .scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  // const nextSlide = () => {
  //   setSlideNum({
  //     activeNum:
  //       slideNum.activeNum === projects.length - 1 ? 0 : slideNum.activeNum + 1
  //   });
  //   document
  //     .querySelector(".Active")
  //     .scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <StateContext.Provider value={{newstate, dispatch}}>
          <Route
            render={({ location, history }) => (
              <div>
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
                        render={routeProps => <HomePage />}
                        exact
                      />
                      <Route path="/work" render={routeProps => <Work />} />
                      <Route path="/projects/Cottonist" component={Cottonist} />
                      <Route path="/projects/Ekar" component={Ekar} />
                      <Route path="/projects/BonAPP" component={BonAPP} />

                      <Route component={NotFound} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                <GlobalStyles />
              </div>
            )}
          />
        </StateContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
