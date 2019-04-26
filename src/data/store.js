import React from "react";

import bonapp from '../assets/img/bonapp.jpg'
import cottonist from '../assets/img/cottonist.jpg'
import ekar from '../assets/img/ekar.jpg'


export const initialState = {
  slideNum: 0,
  workView: undefined,
  projects: [
    {
      imageSrc: cottonist,
      name: "Cottonist",
      platform: "Shopify Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. ",
      link: "Cottonist"
    },
    {
      imageSrc: ekar,
      name: "Ekar",
      platform: "UI / UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. ",
      link: "Ekar"
    },
    {
      imageSrc: bonapp,
      name: "BonAPP",
      platform: "Redesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. ",
      link: "BonAPP"
    }
  ]
  
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
    default:
      throw new Error();
  }
};

export const Context = React.createContext();
