import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider } from "styled-components";

import { theme } from "./styles/Light";
import GlobalStyles from "./styles/Global";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Projects from "./data/project";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";
import ListView from "./components/ListView";
import GridView from "./components/GridView";

export default function App(props) {
  const [gridView, setGridView] = useState(undefined);

  const onGridView = () => {
    setGridView(gridView => "grid");
  };
  
  const clearIcon = () => {
    setGridView(gridView => undefined);
  };

  const onListView = () => {
    setGridView(gridView => "list");
  };

  console.log(gridView);
  const [projects, setSlides] = useState([]);
  useEffect(() => {
    setSlides(projects => [...Projects]);
  }, []);

  const [slideNum, setSlideNum] = useState({
    activeNum: 0
  });

  const prevSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === 0 ? Projects.length - 1 : slideNum.activeNum - 1
    });
  };

  const nextSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === Projects.length - 1 ? 0 : slideNum.activeNum + 1
    });
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Route
          render={({ location, match }) => (
            <div>
              <Header
                listView={onListView}
                gridView={onGridView}
                gridIcon={gridView}
                clearIcon={clearIcon}
              />
              <Sidebar
                match={location}
                projects={projects}
                view={gridView}
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
                    <Route path="/" render={routeProps => <HomePage />} exact />
                    <Route
                      path="/work"
                      render={routeProps => (
                        gridView === "grid" )? (
                          <GridView
                            projects={projects}
                            {...routeProps}
                            gridView={onGridView}
                          />
                        ) : (
                          <ListView
                            slideNum={slideNum}
                            projects={projects}
                            {...routeProps}
                            listView={onListView}
                          />
                        )
                      }
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
