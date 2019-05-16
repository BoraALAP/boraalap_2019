import React from "react";
import { projects } from "../../data/data";
import Button from "../ui/Button";
import ImageContainer from "../../components/ui/ImageContainer";
import { Simple } from "../ui/Ul";

import { Media } from "../../styles/Media";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 3em 5vw;
  grid-gap: 1em 2em;
  grid-auto-flow: row;
  align-items: center;
  grid-template-rows: repeat(3, max-content);
  align-items: start;

  @media ${Media.tablet} {
    grid-auto-flow: column;
  }
`;

const Website = styled.div`
  display: grid;

  @media ${Media.tablet} {
    grid-auto-flow: column;
    grid-row: 2 / 3;
  }
`;

const Header = props => {
  const project = props.info;

  return (
    <>
      <ImageContainer imageSrc={project.imageSrc} />
      <Container>
        <div>
          <small>{project.platform}</small>
          <h2>{project.name}</h2>
        </div>
        <p>{project.description}</p>
        <Simple list={project.projectAttributes} />

        {project.website && (
          <Website>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Button>Visit Website</Button>
            </a>
          </Website>
        )}
      </Container>
    </>
  );
};

export default Header;
