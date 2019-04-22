import React from "react";

import Button from "./Button";

import styled from "styled-components";
import { Media } from "../../styles/Media";

const Style = styled.div`
  display: grid;
  transition: all 1s ease-in;
  align-items: center;
  align-content: center;
  height: 100vh;
  grid-gap: 0.75em;
  scroll-snap-align: start;

  .topSide,
  .bottomSide {
    padding: 0 2em;
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
  padding: 0 2em;
  @media ${Media.tablet} {
    grid-auto-flow: column;
  }
`;

export default function ProjectListCard(props) {
  return (
    <Style className={props.className}>
      <img src={props.imageSrc} alt="Project" />
      <div className="topSide">
        <small>{props.platform}</small>
        <h2>{props.name}</h2>
      </div>
      <BottomSide>
        <p>{props.description}</p>
          <Button path={`projects/${props.link}`}>See the Project</Button>
      </BottomSide>
    </Style>
  );
}
