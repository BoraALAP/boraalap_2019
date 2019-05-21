import React from "react";

import Button from "./Button";
import ImageContainer from "../../components/ui/ImageContainer";
import styled from "styled-components";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import { Media } from "../../styles/Media";

import {toTop} from '../../components/GlobalFunctions'
const Style = styled.div`
  display: grid;
  transition: all 1s ease-in;
  align-items: center;
  align-content: center;
  height: auto;
  min-height: auto;
  grid-gap: 0.75em;
  scroll-snap-align: start;

  img {
    width: 100%;
  }

  @media ${Media.mobileL} {
    height: 100vh;
  min-height: 50em;
  }
`;

const BottomSide = styled.div`
  display: grid;
  padding: 3em 10vw;
  grid-gap: 1em 2em;
  align-items: center;
  align-items: start;
  grid-template-areas:
    "title"
    "description"
    "link";

  .title {
    display: grid;
    grid-area: title;
  }
  @media ${Media.tablet} {
    grid-template-areas:
      "title title"
      "description link";

      padding: 3em 5vw;
  }
`;

const Website = styled.div`
  display: grid;
  grid-area: link;
  @media ${Media.tablet} {
    grid-auto-flow: column;
    grid-row: 2 / 3;
  }
`;

export default function ProjectListCard(props) {

  return (
    <Style className={props.className}>
      <ProjectWrapper>
        <ImageContainer imageSrc={props.imageSrc} />
        <BottomSide>
          <div className="title">
            <small>{props.platform}</small>
            <h2>{props.name}</h2>
          </div>
          <div>
            <p>{props.description}</p>
            
          </div>
          <Website onClick={toTop}>
            <Button path={`projects/${props.link}`}>See the Project</Button>
            </Website>
        </BottomSide>
      </ProjectWrapper>
    </Style>
  );
}
