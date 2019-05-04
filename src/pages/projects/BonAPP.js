import React from "react";
import Content from "../../components/global/Content";
import ProjectPageButtons from "../../components/global/ProjectPageButtons";

export default function BonAPP(props) {
  return (
    <Content>
      <h2>Bon App</h2>

      <ProjectPageButtons props={props.routeProps}/>
    </Content>
  );
}
