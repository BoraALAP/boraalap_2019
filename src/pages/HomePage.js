import React from "react";
import Content from "../components/global/Content";
import Button from "../components/ui/Button";
import styled from "styled-components";

const Wrapper = styled(Content)`
  align-content: start;
  box-sizing: border-box;
  grid-gap: 1em;
  justify-items: start;
  position: absolute;
  bottom: 150px;
  left: 5vw;
  margin-right: calc(50px + 2em + 5vw);
  width: fit-content;
  min-height: inherit;

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

export default function HomePage(props) {
  return (
    <Wrapper>
      <h2>
        Welcome{" "}
        <span role="img" aria-label="Waving">
          👋
        </span>
      </h2>
      <p>
        Thanks for taking your time and checking my portfolio. <br />
        Feel free to reach out to me for any inqueries.{" "}
      </p>
      <Button onclick={props.workPath} path="/work">
        Checkout the Work
      </Button>
    </Wrapper>
  );
}
