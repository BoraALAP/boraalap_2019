import React from "react";
import {projects} from "./data"

export const initialState = {
  slideNum: 0,
  workView: undefined,
  projects: [...projects]
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VIEW":
      return { ...state, workView: action.view };
    case "PREV_SLIDE":
      return state.slideNum === 0
        ? { ...state, slideNum: state.projects.length - 1 }
        : { ...state, slideNum: state.slideNum - 1 };
    case "NEXT_SLIDE": 
      return state.slideNum === state.projects.length - 1
        ? { ...state, slideNum: 0 }
        : { ...state, slideNum: state.slideNum + 1 };

    case 'UPDATE_SLIDE_NUM':
      return { ...state, slideNum: action.slideNum}
    default:
      throw new Error();
  }
};

export const Context = React.createContext();
