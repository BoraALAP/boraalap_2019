import React from "react";
import { TransitionGroup, Transition } from "react-transition-group";

import GridView from "../components/GridView";
import ListView from "../components/ListView";

export default function HomePage(props) {
  
  return (
    <div>
      <div className="Content">
        <TransitionGroup component={null}>
          <Transition timeout={3000}>
            {props.gridView ? (
              <GridView projects={props.projects} slideNum={props.slideNum} />
            ) : (
              <ListView projects={props.projects} slideNum={props.slideNum} />
            )}
          </Transition>
        </TransitionGroup>
      </div>
    </div>
  );
}
