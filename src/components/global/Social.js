import React from "react";
import styled from "styled-components";

import mail from "../../assets/svg/mail.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import behance from "../../assets/svg/behance.svg";
import dribble from "../../assets/svg/dribble.svg";

import Svg from "../ui/Svg";

export default function(props) {

  const SocialStyled = styled.div`
    
    ul {
      display: grid;
      list-style-type: none;
      padding: 0;
      margin: 0;
      grid-auto-flow: column;
      grid-gap:0;
      justify-content: center;
      li{
        list-style:none;
      }
    }
  `;
  return (
    <SocialStyled>
      <ul>
        <li>
          <a href="mailto:alapbora@gmail.com?subject=Hi%20Bora&body=" target="_blank"  rel="noopener noreferrer">
            <Svg alt="email" src={mail} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/boraalap/" target="_blank"  rel="noopener noreferrer">
            <Svg alt="linkedin" src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/BoraALAP" target="_blank"  rel="noopener noreferrer">
            <Svg alt="github" src={github} />
          </a>
        </li>
        <li>
          <a href="https://www.behance.net/BoraALAP" target="_blank"  rel="noopener noreferrer">
            <Svg alt="behance" src={behance} />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/BoraALAP" target="_blank"  rel="noopener noreferrer">
            <Svg alt="dribble" src={dribble} />
          </a>
        </li>
      </ul>
    </SocialStyled>
  );
}
