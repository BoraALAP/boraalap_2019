import React from "react";
import Content from "../components/global/Content";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

export default function WorkPage(props) {
  return (
    <Content>
      {props.workView === "grid" ? (
        <GridView projects={props.projects}  gridView={props.onGridView} />
      ) : (
        <ListView
          slideNum={props.slideNum}
          projects={props.projects}
          
          listView={props.onListView}
        />
      )}
    </Content>
  );
}
