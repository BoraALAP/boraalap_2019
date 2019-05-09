import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Svg from "../ui/Svg";

import leftArrow from "../../assets/svg/arrow/left/black.svg";
import rightArrow from "../../assets/svg/arrow/right/black.svg";

import { Context } from "../../data/store";

const NextButton = styled.div`
  background: ${props => props.theme.color.white};
  border: none;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  align-items: center;
`;

const PrevButton = styled.div`
  background: ${props => props.theme.color.white};
  display: grid;
  grid-auto-flow: column;
  border: none;
  grid-gap: 8px;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 4vh 4vw;
`;

const ProjectPageButtons = props => {
  const { store } = useContext(Context);

  const pageTitle = props.props.match.path.replace("/projects/", "");
  const indexOfProject = store.projects.findIndex(
    item => item.name === pageTitle
  );
  let next;
  let prev;

  const newArr = store.projects.filter(item => item.name !== pageTitle);

  if (indexOfProject === store.projects.length - 1) {
    next = 0;
    prev = indexOfProject - 1;
  } else if (indexOfProject === 0) {
    next = indexOfProject;
    prev = newArr.length - 1;
  } else {
    next = indexOfProject;
    prev = indexOfProject - 1;
  }

  return (
    <Container>
      <Link to={`/projects/${newArr[prev].name}`}>
        <PrevButton>
          <Svg src={leftArrow} alt="left arrow" />
          <p>Previous</p>
        </PrevButton>
      </Link>
      <Link to={`/projects/${newArr[next].name}`}>
        <NextButton>
          <p>Next</p>
          <Svg src={rightArrow} alt="right arrow" />
        </NextButton>
      </Link>
    </Container>
  );
};

export default ProjectPageButtons;
