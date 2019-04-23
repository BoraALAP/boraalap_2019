import React from "react";
import Content from "../components/global/Content";
import GridView from "../components/GridView";
import ListView from "../components/ListView";

export default function WorkPage(props) {
  return (
    <Content>
      {props.workView === "grid" ? (
        <GridView/>
      ) : (
        <ListView
        />
      )}
    </Content>
  );
}
