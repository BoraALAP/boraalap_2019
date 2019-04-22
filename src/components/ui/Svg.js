import React from "react";
import styled from "styled-components";

const Styled = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 0.5em;
  img {
    height: ${props => (props.smallSize ? "1em" : "1.5em")};
    width: ${props => (props.smallSize ? "1em" : "1.5em")};
  }
`;

const Svg = props => {
  return (
    <Styled onClick={props.onclick}>
      {props.src ? <img src={props.src} alt={props.alt} /> : props.children}
    </Styled>
  );
};

export default Svg;
