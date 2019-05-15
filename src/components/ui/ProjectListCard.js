import React from "react";

import Button from "./Button";
import ImageContainer from "../../components/ui/ImageContainer";
import styled from "styled-components";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import { Media } from "../../styles/Media";

const Style = styled.div`
  display: grid;
  transition: all 1s ease-in;
  align-items: center;
  align-content: center;
  height: 100vh;
  min-height: 50em;
  grid-gap: 0.75em;
  scroll-snap-align: start;

  .topSide,
  .bottomSide {
    padding: 0 3em;
  }
  .topSide {
    margin-top: 2em;
  }

  img {
    width: 100%;
  }

  &.Active {
  }
`;

const BottomSide = styled.div`
  grid-gap: 2em;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  padding: 0 3em;
  @media ${Media.tablet} {
    grid-auto-flow: column;
  }
`;

export default function ProjectListCard(props) {
  return (
    <Style className={props.className}>
      <ProjectWrapper>
        <ImageContainer imageSrc={props.imageSrc} />
        <div className="topSide">
          <small>{props.platform}</small>
          <h2>{props.name}</h2>
        </div>
        <BottomSide>
          <p>{props.description}</p>
          <Button path={`projects/${props.link}`}>See the Project</Button>
        </BottomSide>
      </ProjectWrapper>
    </Style>
  );
}
