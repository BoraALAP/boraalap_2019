import React, { useContext } from "react";
import Content from "../components/global/Content";
import Button from "../components/ui/Button";
import styled, { keyframes } from "styled-components";
import { Context } from "../data/store";
import { Media } from "../styles/Media";

import me from "../assets/img/me.jpg";

const Wrapper = styled(Content)`
  align-content: start;
  box-sizing: border-box;
  grid-gap: 2em;
  align-content: end;
  justify-items: start;
  min-height: calc(100vh - 170px);
  margin: auto 10vw 5vh;
  
  width: auto;

  p {
    font-size: 1em;
    color: ${props => props.theme.color.gray};
  }

  @media ${Media.mobileL} {
    min-height: 100vh;
    margin: auto 7em auto;
    align-content: center;
    h2 {
      font-size: 2.75em;
    }

    p {
      font-size: 1.25em;
    }
  }

  h2 {
    font-size: 4em;
  }

  

  button {
    margin-top: 2em;
  }
`;

const keyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Wave = styled.div`
  animation: ${keyFrames} ${props => props.theme.animation.slower} 0s infinite
    both;
  animation-timing-function: cubic-bezier(0.57, 0.06, 0.49, 0.96);
  transform-origin: 85% 85%;
  transform: rotate(0deg);
  display: inline-block;
`;

const Img = styled.img`
  width: 50vw;
  display: none;

  justify-self: end;

  @media ${Media.mobileL} {
    display: grid;
  }
`;

export default function HomePage() {
  const { dispatch } = useContext(Context);
  return (
    <Wrapper>
      <Img src={me} alt="bora alap" />
      <div>
        <h2>
          Welcome{" "}
          <Wave>
            <span role="img" aria-label="Waving">
              👋
            </span>
          </Wave>
        </h2>
        <p>The product designer who loves to mess with code. </p>
        <p>Hi, I hope you will enjoy the website itself as well.</p>

        <Button
          onclick={() => dispatch({ type: "UPDATE_VIEW", view: "list" })}
          path={"/list"}
        >
          Checkout the Work
        </Button>
      </div>
    </Wrapper>
  );
}
