import React, { useContext } from "react";
import Content from "../components/global/Content";
import Button from "../components/ui/Button";
import styled, { keyframes } from "styled-components";
import { Context } from "../data/store";
import { Media } from '../styles/Media'

const Wrapper = styled(Content)`
  align-content: start;
  box-sizing: border-box;
  grid-gap: 1em;
  justify-items: start;
  width: fit-content;
  min-height: inherit;
  padding: 12.500em 10vw 2em;

  @media ${Media.mobileL} {
    position: absolute;
    bottom: 10em;
    left: 5vw;
    margin-right: calc(50px + 2em + 5vw);
    padding: 0;
    h2 {
      font-size: 2.75em;
    }
  }

  h2 {
    font-size: 4em;
  }

  p {
    font-size: 1.25em;
    color: ${props => props.theme.color.gray};
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
`

const Wave = styled.div`
  animation: ${keyFrames} ${props => props.theme.animation.slower} 0s infinite both;
  animation-timing-function: cubic-bezier(.57,.06,.49,.96);
  transform-origin: 85% 85%;
  transform: rotate(0deg);
  display: inline-block;
`

export default function HomePage() {
  const { dispatch } = useContext(Context);
  return (
    <Wrapper>
      <h2>
        Welcome{" "}
        <Wave>
        <span role="img" aria-label="Waving">
          👋
        </span>
        </Wave>
      </h2>
      <p>
        Thanks for taking your time and checking my portfolio. <br />
        Feel free to reach out to me for any inqueries.{" "}
      </p>

      <Button
        onclick={() => dispatch({ type: "UPDATE_VIEW", view: "list" })}
        path={"/work"}
      >
        Checkout the Work
      </Button>
    </Wrapper>
  );
}
