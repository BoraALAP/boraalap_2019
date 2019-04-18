import React from "react";

import { Link } from "react-router-dom";

import mail from "../../assets/svg/mail.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import behance from "../../assets/svg/behance.svg";
import dribble from "../../assets/svg/dribble.svg";

import leftArrow from "../../assets/svg/arrow/left/black.svg";
import upArrow from "../../assets/svg/arrow/up/black.svg";
import downArrow from "../../assets/svg/arrow/down/black.svg";

import styled from 'styled-components'

import LinkButton from '../ui/LinkButton'


const Style = styled.div`

  display: grid;
  position: fixed;
  top: 80px;
  justify-items: center;
  width: 50px;
  left: 20px;

  .Contollers {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    height: calc(100vh - 80px - 2.5vh);
    justify-items: center;
    .projectNum {
      padding: 20px 0;
      justify-items: center;
      display: grid;
      font-family: ${props => props.theme.font_header};
      color: ${props => props.theme.gray}_light;
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
      background-color: ${props => props.theme.gray};
    }
  }

  .social {
    position: fixed;
    bottom: 2.5vh;
    left: calc(2.5vw + 50px);
    display: grid;
    ul {
      display: grid;
      list-style-type: none;
      padding: 0;
      margin: 0;
      grid-auto-flow: column;
      li {
        padding: 5px;
      }
    }
  }

  img {
    height: 20px;
    width: 20px;
  }
`


export default function Sidebar(props) {
  const { data, match, nextSlide, prevSlide, projects, view } = props;
  console.log(data);

  const sidebarBack = (
    <div className="projectNum">
      <Link to="/">
        <LinkButton>
          <img src={leftArrow} alt="left arrow" />
        </LinkButton>
      </Link>
    </div>
  );

  const sidebarEmpty = <div> </div>;
  const sidebarList = (
    <div className="projectNum">
      <LinkButton onClick={prevSlide}>
        <img src={upArrow} alt="up arrow" />
        </LinkButton>
      <span id="currentProject">{data.activeNum + 1}</span>/
      <span id="totalProjects">{projects.length}</span>
      <LinkButton onClick={nextSlide}>
        <img src={downArrow} alt="down arrow" />
      </LinkButton>
    </div>
  );

  return (
    <Style>
      <div className="Contollers">
        <div className="line" />
        {match.pathname.includes("projects")
          ? sidebarBack
          : view === 'list'
          ? sidebarList
          : sidebarEmpty}
        <div className="line" />
      </div>

      <div className="social">
        <ul>
          <li>
            <a href="https://www.linkedin.com">
              <img alt="email" src={mail} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin2.com">
              <img alt="linkedin" src={linkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin3.com">
              <img alt="github" src={github} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin4.com">
              <img alt="behance" src={behance} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin5.com">
              <img alt="dribble" src={dribble} />
            </a>
          </li>
        </ul>
      </div>
      </Style>
  );
}
