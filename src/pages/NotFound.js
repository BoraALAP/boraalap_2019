import React, { useContext } from "react";
import { Context } from "../data/store";

import Content from "../components/global/Content";
import styled from "styled-components";

import Button from "../components/ui/Button";

const Container = styled(Content)`
  display: grid;
  justify-content: center;
  align-content: center;
  justify-items: center;
  grid-gap: 2em;
  text-align: center;
`;

const Span = styled.span`
  font-size: 6em;
`;

const NotFound = () => {
  const { dispatch } = useContext(Context);
  return (
    <Container>
      <div>
        <h1>404!</h1>
        <h3>I don't think you are in a page.</h3>
      </div>
      <Span role="img" aria-label="Searching">
        🕵️
      </Span>

      <Button
        onclick={() => dispatch({ type: "UPDATE_VIEW", view: "list" })}
        path={"/list"}
      >
        Would You Like to See Some Work??
      </Button>
    </Container>
  );
};

export default NotFound;
