import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

export default function BonAPP(props) {
  return (
    <ProjectWrapper padding>
      <ProjectHeader info={"BonAPP"} />

      <ProjectPageButtons props={props.routeProps} />
    </ProjectWrapper>
  );
}
