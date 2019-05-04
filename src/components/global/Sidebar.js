import React, { useEffect, useContext } from "react";
import { Context } from "../../data/store";
import { Link } from "react-router-dom";

import mail from "../../assets/svg/mail.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import behance from "../../assets/svg/behance.svg";
import dribble from "../../assets/svg/dribble.svg";

import leftArrow from "../../assets/svg/arrow/left/black.svg";
import upArrow from "../../assets/svg/arrow/up/black.svg";
import downArrow from "../../assets/svg/arrow/down/black.svg";

import styled from "styled-components";

import Svg from "../ui/Svg";

import {Media} from '../../styles/Media'

const Style = styled.div`
  display: none;
  position: fixed;
  top: 80px;
  justify-items: center;
  width: 50px;
  left: 1em;
  z-index: 1000;

  @media ${Media.mobileL}{
    display: grid;
  }

  .Contollers {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    height: calc(100vh - 80px - 2.5vh);
    justify-items: center;
    .projectNum {
      padding: 20px 0;
      justify-items: center;
      display: grid;
      font-family: ${props => props.theme.font.header};
      color: ${props => props.theme.color.gray_light};
      font-size: 1.5em;

      #currentProject,
      #totalProjects {
        position: relative;
        display: grid;
        font-size: 1.5em;
      }

      #currentProject {
        justify-self: start;
        bottom: -0.25em;
        left: -0.25em;
      }

      #totalProjects {
        justify-self: end;
        top: -0.5em;
        right: -0.2em;
      }
    }

    .line {
      width: 1px;
      background-color: ${props => props.theme.color.gray};
    }
  }

  .social {
    position: absolute;
    bottom: 0;
    padding: 0px 16px;
    left: 40px;
    display: grid;
    background-color: ${props => props.theme.color.white};
    ul {
      display: grid;
      list-style-type: none;
      padding: 0;
      margin: 0;
      grid-auto-flow: column;
    }
  }
`;

export default function Sidebar(props) {
  const { store, dispatch } = useContext(Context);
  const { workView, projects, slideNum } = { ...store };
  const { location } = props;

  useEffect(() => {
    console.log("test");
    if (document.querySelector(".ActiveProject")) {
      document
        .querySelector(".ActiveProject")
        .scrollIntoView({ behavior: "smooth" });
    }
  });

  const sidebarBack = (
    <div className="projectNum">
      <Link to={"/work"}>
        <Svg src={leftArrow} alt="left arrow" />
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

      <div className="social">
        <ul>
          <li>
            <a href="https://www.linkedin.com">
              <Svg alt="email" src={mail} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin2.com">
              <Svg alt="linkedin" src={linkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin3.com">
              <Svg alt="github" src={github} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin4.com">
              <Svg alt="behance" src={behance} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin5.com">
              <Svg alt="dribble" src={dribble} />
            </a>
          </li>
        </ul>
      </div>
    </Style>
  );
}
