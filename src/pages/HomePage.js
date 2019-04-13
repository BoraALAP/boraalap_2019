import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from "../components/global/Sidebar";
import GridView from '../components/GridView'
import ListView from '../components/ListView'
import projects from "../data/project";

export default function HomePage(props) {
  const [slides, setSlides] = useState([]);

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
    <div>
      <Sidebar
        location={props.match.path}
        projects={projects}
        data={slideNum}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <div className="Content">
        <Switch>
          <Route path="/" component={GridView} />
          <Route path="/list" component={ListView} />
        </Switch>
      </div>
    </div>
  );
}
