import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import Projects from "./data/project";

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Cottonist from "./pages/projects/Cottonist";
import Ekar from "./pages/projects/Ekar";
import BonAPP from "./pages/projects/BonAPP";

import "./styles/Index.scss";

export default function App(props) {
  const [gridView, setGridView] = useState(true);

  const onGridView = () => {
    setGridView(gridView => true);
  };

  const onListView = () => {
    setGridView(gridView => false);
  };

  const [projects, setSlides] = useState([...Projects]);

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
      <div className="Website">
        <Route
          render={ ({location, match}) => (
            <div>
              <Header
                listView={onListView}
                gridView={onGridView}
                gridIcon={gridView}
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
                  className="Content"
                  transitionEnterTimeout={500}
                  timeout={2000}
                >
                  <Switch>
                    <Route
                      path="/"
                      render={routeProps => (
                        <HomePage
                          gridView={gridView}
                          projects={projects}
                          slideNum={slideNum}
                        />
                      )}
                      exact
                    />
                    <Route path="/projects/Cottonist" component={Cottonist} />
                    <Route path="/projects/Ekar" component={Ekar} />
                    <Route path="/projects/BonAPP" component={BonAPP} />

                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          )}
        />
      </div>
    </BrowserRouter>
  );
}
