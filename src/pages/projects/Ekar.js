import React from 'react'
import Content from "../../components/global/Content";
import ProjectPageButtons from '../../components/global/ProjectPageButtons';

export default function Ekar(props) {
    return (
      <Content>
      <h2>Ekar</h2>

      <ProjectPageButtons props={props.routeProps}/>
      </Content>
    )
  }

