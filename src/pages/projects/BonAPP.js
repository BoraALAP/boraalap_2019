import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

export default function BonAPP(props) {
  return (
    <ProjectWrapper padding>
      <h2>Bon App</h2>

      <ProjectPageButtons props={props.routeProps}/>
    </ProjectWrapper>
  );
}
