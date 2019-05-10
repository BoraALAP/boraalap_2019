import React from "react";
import styled from "styled-components";
import { Media } from "../../styles/Media";

import mail from "../../assets/svg/mail.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import behance from "../../assets/svg/behance.svg";
import dribble from "../../assets/svg/dribble.svg";

import Svg from "../ui/Svg";

export default function(props) {

  const SocialStyled = styled.div`
    position: ${props.absolute ? "absolute" : "initial"};
    bottom: 0;
    padding: 0px 16px;
    left: 40px;
    display: ${props.hideSmall ? "none" : "grid"};
    background-color: ${props => props.theme.color.white};
    ul {
      display: grid;
      list-style-type: none;
      padding: 0;
      margin: 0;
      grid-auto-flow: column;
      grid-gap:0;
      li{
        list-style:none;
      }
    }

    @media ${Media.mobileL} {
      display: ${props.hideSmall ? "grid" : "none"};
    }
  `;
  return (
    <SocialStyled>
      <ul>
        <li>
          <a href="https://www.linkedin.com">
            <Svg alt="email" src={mail} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin2.com">
            <Svg alt="linkedin" src={linkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin3.com">
            <Svg alt="github" src={github} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin4.com">
            <Svg alt="behance" src={behance} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin5.com">
            <Svg alt="dribble" src={dribble} />
          </a>
        </li>
      </ul>
    </SocialStyled>
  );
}
