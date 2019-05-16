import React from "react";

import Button from "../ui/Button";
import ImageContainer from "../../components/ui/ImageContainer";
import { ProjectListing } from "../ui/Ul";

import { Media } from "../../styles/Media";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  padding: 3em 5vw;
  grid-gap: 1em 2em;
  align-items: center;
  align-items: start;
  grid-template-areas:
    "title"
    "description"
    "listing"
    "link";

  .title {
    display: grid;
    grid-area: title;
  }

  .listing {
    display: grid;
    grid-area: listing;
  }

  @media ${Media.tablet} {
    grid-template-areas:
      "title title"
      "description link"
      "listing listing";
  }
`;

const Website = styled.div`
  display: grid;
  grid-area: link;

  @media ${Media.tablet} {
    grid-row: 2 / 3;
  }
`;

const Header = props => {
  const project = props.info;

  return (
    <>
      <ImageContainer imageSrc={project.imageSrc} />
      <Container>
        <div className="title">
          <small>{project.platform}</small>
          <h2>{project.name}</h2>
        </div>
        <p>{project.description}</p>
        <ProjectListing list={project.projectAttributes} />

        {project.website && (
          <Website>
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Button>Visit the Website</Button>
            </a>
          </Website>
        )}
      </Container>
    </>
  );
};

export default Header;
