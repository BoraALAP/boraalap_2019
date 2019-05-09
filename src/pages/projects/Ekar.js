import React from 'react'
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectPageButtons from '../../components/projectItems/ProjectPageButtons';

export default function Ekar(props) {
    return (
      <ProjectWrapper>
      <h2>Ekar</h2>

      <ProjectPageButtons props={props.routeProps}/>
      </ProjectWrapper>
    )
  }

