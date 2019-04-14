import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "../components/global/Header";
import Sidebar from "../components/global/Sidebar";
import projects from "../data/project";

import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Cottonist from "../pages/projects/Cottonist";
import Ekar from "../pages/projects/Ekar";
import BonAPP from "../pages/projects/BonAPP";

import "../styles/Index.scss";

export default function AppRouter(props) {
  const [gridView, setGridView] = useState(false);

  const onGridView = () => {
    setGridView(gridView => true);
  };

  const onListView = () => {
    setGridView(gridView => false);
  };

  const [slides, setSlides] = useState([...projects]);

  const [slideNum, setSlideNum] = useState({
    activeNum: 0
  });

  const prevSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === 0 ? projects.length - 1 : slideNum.activeNum - 1
    });
  };

  const nextSlide = () => {
    setSlideNum({
      activeNum:
        slideNum.activeNum === projects.length - 1 ? 0 : slideNum.activeNum + 1
    });
  };

  return (
    <div className="Website">
      <Route
        render={({ location }) => (
          <div>
            <Header
              listView={onListView}
              gridView={onGridView}
              gridIcon={gridView}
            />
            <Sidebar
              location={props.match.path}
              projects={projects}
              data={slideNum}
              prevSlide={prevSlide}
              nextSlide={nextSlide}
            />
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                className="Content"
                transitionEnterTimeout={1000}
                timeout={2000}
              >
                <Switch location={location}>
                  <Route
                    path="/"
                    render={routeProps => (
                      <HomePage {...routeProps} gridView={gridView} slide={slides} slideNum={slideNum}/>
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
  );
}
