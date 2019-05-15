import React from "react";
import styled from "styled-components";
import Swatches from "./Swatches";

import { Media } from '../../styles/Media'

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

  .colortext {
    padding: 2em;
    background: ${props => props.theme.color.white};
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
    padding: 2em;

    img {
      max-height: 150px;
    }
  }

  .logotext {
    padding: 2em;
    
    p{
    position: sticky;
    top: 200px;
  }
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
  return (
    <>
      <Logo>
        <h2>Logo</h2>
        <LogoContainer>
          <div className="logos">
            <img src={props.logo1} alt="" className="toplogo" />
            {props.logo2 && <img src={props.logo2} alt="" />}
            {props.logo3 && <img src={props.logo3} alt="" />}
            {props.logo4 && (
              <img src={props.logo4} alt="" className="lastlogo" />
            )}
          </div>
          <div className="logotext"><p>{props.logotext}</p></div>
        </LogoContainer>
      </Logo>
      <Colors>
        <h2>Colors</h2>
        <div className="swatches">
          <Swatches background={props.primarycolor} title={`Primary`} />
          {props.secondarycolor && (
            <Swatches background={props.secondarycolor} title={`Secondary`} />
          )}
          <Swatches background={props.greycolor1} title={`Grey Dark`} />
          <Swatches background={props.greycolor2} title={`Grey Medium`} />
          <Swatches background={props.greycolor3} title={`Grey Light`} />
        </div>
        <p className="colortext">{props.colortext}</p>
      </Colors>
    </>
  );
};

export default Branding;
