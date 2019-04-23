import React from "react";

export const initialState = {
  slideNum: 0,
  projects: [],
  workView: undefined
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_GRID":
      return { ...state, workView: "grid" };
    case "CLEAR_ICON":
      return { ...state, workView: undefined };
    case "SHOW_LIST":
      return { ...state, workView: "list" };
    case "PREV_SLIDE":
      return state.slideNum === 0
        ? { ...state, slideNum: state.projects.length - 1 }
        : { ...state, slideNum: state.slideNum - 1 };

    case "NEXT_SLIDE":
      return state.slideNum === state.projects.length - 1
        ? { ...state, slideNum: 0 }
        : { ...state, slideNum: state.slideNum + 1 };

    case "SAVE_PROJECTS":
      return { ...state, projects: [...action.Data.projects] };
    default:
    throw new Error();
  }
};

export const Context = React.createContext();
