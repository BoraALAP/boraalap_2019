import React, { useContext } from "react";

import GridView from "../components/GridView";
import ListView from "../components/ListView";
import { Context } from "../data/store";

export default function WorkPage() {
  const { store } = useContext(Context);
  return <>{store.workView === "grid" ? <GridView /> : <ListView />}</>;
}
