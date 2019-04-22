import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import theme from "./styles/Light";
import GlobalStyles from "./styles/Global";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Data from "./data/data";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import Work from "./pages/Work";

export default function App(props) {
  const [workView, setWorkView] = useState(undefined);

  const onGridView = () => {
    setWorkView(workView => "grid");
  };

  const clearIcon = () => {
    setWorkView(workView => undefined);
  };

  const onListView = () => {
    setWorkView(workView => "list");
  };

  const [projects, setSlides] = useState([]);
  useEffect(() => {
    setSlides(projects => [...Data.projects]);
  }, []);

  const [slideNum, setSlideNum] = useState({
    activeNum: 0
  });

  const prevSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === 0 ? projects.length - 1 : slideNum.activeNum - 1
    });
    document
      .querySelector(".Active")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const nextSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === projects.length - 1 ? 0 : slideNum.activeNum + 1
    });
    document
      .querySelector(".Active")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location, history }) => (
            <div>
              <Header
                listView={onListView}
                gridView={onGridView}
                workIcon={workView}
                clearIcon={clearIcon}
                data={Data}
              />
              <Sidebar
                location={location}
                history={history}
                projects={projects}
                view={workView}
                data={slideNum}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
              />
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  transitionEnterTimeout={0}
                  timeout={100}
                >
                  <Switch>
                    <Route
                      path="/"
                      render={routeProps => <HomePage workPath={onListView} />}
                      exact
                    />
                    <Route
                      path="/work"
                      render={routeProps => (
                        <Work
                          slideNum={slideNum}
                          projects={projects}
                          onListView={onListView}
                          onGridView={onGridView}
                          clearIcon={clearIcon}
                          workView={workView}
                          prevSlide={prevSlide}
                          nextSlide={nextSlide}
                        />
                      )}
                    />
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
      </ThemeProvider>
    </BrowserRouter>
  );
}
