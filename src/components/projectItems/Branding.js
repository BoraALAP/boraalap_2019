import React from "react";
import styled from "styled-components";
import Swatches from "./Swatches";

import { Media } from '../../styles/Media'

const Container = styled.div`
  margin-bottom: 3em;
`

const Colors = styled.div`
  background: ${props => props.theme.color.gray_lightest};
  padding: 5vw;
  display: grid;
  grid-gap: 3vh;

  .swatches {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 3vh;
  }
`;

const Logo = styled.div`
  background: ${props => props.theme.color.gray_lightest};
  padding: 5vw;
  display: grid;
  grid-gap: 3vh;

  .logos {
    display: grid;
    grid-gap: 3vh;
    align-items: center;
    padding: 3em 2em;

    img {
      max-height: 150px;
    }
  }

  .logoText {
    padding: 2em;
    display: grid;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  background: ${props => props.theme.color.white};

  @media ${Media.tablet}{
    grid-auto-flow: column;
  }
`

const Branding = props => {

  const project = props.info
  return (
    <Container>
      <Logo>
        <h2>Logo</h2>
        <LogoContainer>
          <div className="logos">
            <img src={project.logo1} alt="" className="toplogo" />
            {project.logo2 && <img src={project.logo2} alt="" />}
            {project.logo3 && <img src={project.logo3} alt="" />}
            {project.logo4 && (
              <img src={project.logo4} alt="" className="lastlogo" />
            )}
          </div>
          <div className="logoText"><p>{project.logotext}</p></div>
        </LogoContainer>
      </Logo>
      <Colors>
        <h2>Colors</h2>
        <div className="swatches">
          <Swatches background={project.primarycolor} title={`Primary`} />
          {project.secondarycolor && (
            <Swatches background={project.secondarycolor} title={`Secondary`} />
          )}
          <Swatches background={project.greycolor1} title={`Grey Dark`} />
          <Swatches background={project.greycolor2} title={`Grey Medium`} />
          <Swatches background={project.greycolor3} title={`Grey Light`} />
        </div>
        <div className="colorText"><p>{project.colortext}</p></div>
      </Colors>
    </Container>
  );
};

export default Branding;
