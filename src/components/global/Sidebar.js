import React, { useEffect, useContext } from "react";
import { Context } from "../../data/store";
import { Link } from "react-router-dom";



import leftArrow from "../../assets/svg/arrow/left/black.svg";
import upArrow from "../../assets/svg/arrow/up/black.svg";
import downArrow from "../../assets/svg/arrow/down/black.svg";

import styled from "styled-components";

import Svg from "../ui/Svg";


import {Media} from '../../styles/Media'

const Style = styled.div`
  display: none;
  position: fixed;
  top: 5em;
  justify-items: center;
  width: 3em;
  left: 1.5em;
  z-index: 1000;
  height: calc(100vh - 5em - 2em);

  @media ${Media.mobileL}{
    display: grid;
  }

  .Contollers {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    justify-items: center;
    .projectNum {
      padding: 1.5em 0;
      justify-items: center;
      display: grid;
      font-family: ${props => props.theme.font.header};
      color: ${props => props.theme.color.gray_light};

      #currentProject,
      #totalProjects {
        position: relative;
        display: grid;
        font-size: 1.5em;
      }

      #currentProject {
        justify-self: start;
        bottom: -0.2em;
        
      }

      #totalProjects {
        justify-self: end;
        top: -0.75em;
       
      }
    }

    
  }
`;

export default function Sidebar(props) {
  const { store, dispatch } = useContext(Context);
  const { workView, projects, slideNum } = { ...store };
  const { location } = props;

  useEffect(() => {
    if (document.querySelector(".ActiveProject")) {
      document
        .querySelector(".ActiveProject")
        .scrollIntoView({ behavior: "smooth" });
    }
  });

  const sidebarBack = (
    <div className="projectNum">
      <Link to={"/work"}>
        <Svg src={leftArrow} alt="left arrow" smallSize/>
      </Link>
    </div>
  );

  const sidebarEmpty = <div> </div>;
  const sidebarList = (
    <div className="projectNum">
      <Svg
        src={upArrow}
        alt="up arrow"
        onclick={() => dispatch({ type: "PREV_SLIDE" })}
      />
      <span id="currentProject">{slideNum + 1}</span>/
      <span id="totalProjects">{projects.length}</span>
      <Svg
        src={downArrow}
        alt="down arrow"
        onclick={() => dispatch({ type: "NEXT_SLIDE" })}
      />
    </div>
  );

  return (
    <Style>
      <div className="Contollers">
        <div className="line" />
        {location.pathname.includes("projects")
          ? sidebarBack
          : workView === "list"
          ? sidebarList
          : sidebarEmpty}
        <div className="line" />
      </div>
    </Style>
  );
}
