import React from "react";
import ProjectWrapper from "../../components/projectItems/ProjectWrapper";
import ProjectHeader from "../../components/projectItems/ProjectHeader";
import ProjectPageButtons from "../../components/projectItems/ProjectPageButtons";

import styled from "styled-components";
import ProjectStyles from "../../styles/Project";
import { Media } from "../../styles/Media";

import { projects } from "../../data/data";
import Branding from "../../components/projectItems/Branding";

import homepage from "../../assets/img/cottonist/homepage.jpg";
import menu from "../../assets/img/cottonist/menu.jpg";
import product from "../../assets/img/cottonist/product.jpg";
import listing from "../../assets/img/cottonist/listing.jpg";
import branding from "../../assets/img/cottonist/branding.jpg";
import Button from "../../components/ui/Button";

const Container = styled.div`
  
`

const Content = styled.div`
  display: grid;
  grid-gap: 4em;

  .twoColumn{
    display: grid;
    grid-gap: 2em;
    grid-auto-flow: row;
    justify-content: space-between;

    @media ${Media.tablet} {
      grid-template-columns: auto auto;
      grid-auto-flow: column;
    }
  }

  .colorText{
    background: ${props => props.theme.color.gray_lightest};
    padding:4vw;
  }

  h4, h3{
    margin-bottom: 2em;
  }
`

export default function Cottonist(props) {
  const data = projects.filter(item => item.name === "Cottonist");
  const project = data[0];
  return (
    <Container>
      <ProjectWrapper padding>
        <ProjectHeader info={project} />

        <Branding info={project} />

        <Content>
        <div>
          <h4>Home Page</h4>
          <img src={homepage} className="desktopImage" alt="cottonist home page" />
        </div>
        <div>
          <h4>Menu Page</h4>
          <img src={menu} className="desktopImage" alt="cottonist menu" />
        </div>

        <div className="colorText">
          <p>Those screens are captured from the final result. I believe in the result more than just the presentation phase of the project. The design needs to be able to work perfectly at every stage of the responsiveness of the webpage.</p>
        </div>

        <div>
          <h4>Product Page</h4>
          <img src={product} className="desktopImage" alt="cottonist product page" />
        </div>

        <div>
          <h4>Listing Page</h4>
          <img src={listing} className="desktopImage" alt="cottonist product listing page" />
        </div>

        <div className="colorText twoColumn">
          <p>Feel free to take at the original website. I hope you will enjoy it. </p>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
              <Button>Visit the Website</Button>
            </a>
        </div>

        <div>
        <h3>Some of the Branding Pieces</h3>
        <img src={branding} className="desktopImage" alt="cottonist business cards" />
        </div>

        


        </Content>
        <ProjectPageButtons props={props.routeProps} />
      </ProjectWrapper>
      <ProjectStyles />
    </Container>
  );
}
