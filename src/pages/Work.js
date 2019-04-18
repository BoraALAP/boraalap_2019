
import React from "react";
import Content from "../components/global/Content";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

export default function HomePage(props) {
  
  return (
      <Content>
        {props.gridView ? (
    <GridView projects={props.projects} slideNum={props.slideNum} clear={props.clearIcon} />
  ) : (
    <ListView projects={props.projects} slideNum={props.slideNum} />
  )}
      </Content>
  );
}


