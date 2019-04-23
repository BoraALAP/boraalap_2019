import React, { useContext } from "react";
import Content from "../components/global/Content";
import Button from "../components/ui/Button";
import styled from "styled-components";
import { Context } from '../data/store'

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
  const {dispatch} = useContext(Context)
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
      <Button onClick={dispatch({ type: "SHOW_LIST" })} path="/work">
        Checkout the Work
      </Button>
    </Wrapper>
  );
}
