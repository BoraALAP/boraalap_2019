import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import rightArrow from "../../assets/svg/arrow/right/black.svg";
import Svg from "./Svg";

const Style = styled.div`
  display: grid;
`;

const Bottom = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin: 1em;
  align-items: center;
  background-color: ${props => props.theme.color.white};
  transform: translateY(-4em);
  box-shadow: ${props => props.theme.box_shadow};
  padding:1em 1.5em;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  background-image: url(${props => props.imageSrc});
  height: 20vh;
  width: 100%;
  background-position: center;
  background-size: cover;

`

const Details = styled.div``;



const ProjectGridCard = props => {
  return (
    <Style>
      <ImageContainer imageSrc={props.imageSrc}/>
      <Bottom>
        <Details>
          <small>{props.platform}</small>
          <h3>{props.name}</h3>
        </Details>
        <Link to={`projects/${props.link}`} >
          <Svg smallSize src={rightArrow} alt="right arrow"/>
        </Link>

        
      </Bottom>
    </Style>
  );
};

export default ProjectGridCard;
