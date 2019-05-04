import React, { useContext } from "react";
import Content from "../components/global/Content";
import Button from "../components/ui/Button";
import styled from "styled-components";
import { Context } from "../data/store";
import { Media } from '../styles/Media'

const Wrapper = styled(Content)`
  align-content: start;
  box-sizing: border-box;
  grid-gap: 1em;
  justify-items: start;
  width: fit-content;
  min-height: inherit;
  padding: 200px 10vw;

  @media ${Media.mobileL} {
    position: absolute;
    bottom: 150px;
    left: 5vw;
    margin-right: calc(50px + 2em + 5vw);
    padding: 0;
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

export default function HomePage() {
  const { dispatch } = useContext(Context);
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

      <Button
        onclick={() => dispatch({ type: "UPDATE_VIEW", view: "list" })}
        path={"/work"}
      >
        Checkout the Work
      </Button>
    </Wrapper>
  );
}
