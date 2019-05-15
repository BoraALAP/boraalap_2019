import React from "react";
import styled from "styled-components";
import Social from "./Social";
import { Media } from "../../styles/Media";

const Style = styled.div`
  width: 100vw;
  z-index: 900;
  bottom: 0;
  padding: 1em;
  background-color: ${props => props.theme.color.white};
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-gap: 1vh;

  @media ${Media.mobileL} {
    position: fixed;
    grid-auto-flow: column;
    align-items:center;
    justify-content: space-between;
    padding: 1em 2.5em 1em 4em;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Style>
      <Social />
      <small>© {currentYear} Bora ALAP.</small>
    </Style>
  );
};

export default Footer;
