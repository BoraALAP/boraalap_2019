import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-gap: 1em;
  h4{
    margin-bottom: 0.5em;
  }
  `;


const ColorContainer = styled.div`
  height: 100px;
  background: ${props => props.backgroundColor};
  box-shadow: ${props => props.theme.image_shadow};
`;

const Swatches = props => {
  const hexToRGB = hex => {
    hex = hex.replace("#", "");
    let [r, g, b] = [...hex];

    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    return `( ${r}, ${g}, ${b} )`;
  };

  return (
    <Container>
      <ColorContainer backgroundColor={props.background} />
      <div>
      <h4>{props.title}</h4>
      <p>Hex: {props.background}</p>
      <p>RGB: {hexToRGB(props.background)} </p>
      </div>
    </Container>
  );
};

export default Swatches;
