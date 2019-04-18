import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import LinkButton from "./LinkButton";
import rightArrow from "../../assets/svg/arrow/right/black.svg";

const Style = styled.div`
  display: grid;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: auto 3em;
  margin: 1em;
  align-items: center;
  background-color: ${props => props.theme.white}
  transform: translateY(-4em);
  box-shadow: ${props => props.theme.box_shadow};
  padding:1em 1.5em;
`;

const Details = styled.div``;

const SVG = styled(LinkButton)`
  padding: 1em;
  height: 3em;
  width: 3em;
`;

const ProjectGridCard = props => {
  return (
    <Style>
      <img src={props.imageSrc} alt="Project" />
      <Bottom>
        <Details>
          <small>{props.platform}</small>
          <h3>{props.name}</h3>
        </Details>
        <Link to={`projects/${props.link}`} onClick={props.changeSideBar}>
          <SVG>
            <img src={rightArrow} alt="right arrow" />
          </SVG>
        </Link>
      </Bottom>
    </Style>
  );
};

export default ProjectGridCard;
