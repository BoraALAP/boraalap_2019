import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Svg from "../ui/Svg";

import leftArrow from "../../assets/svg/arrow/left/black.svg";
import rightArrow from "../../assets/svg/arrow/right/black.svg";

import { Context } from "../../data/store";

import { toTop } from "../../components/GlobalFunctions";

const NextButton = styled.div`
  background: ${props => props.theme.color.white};
  border: none;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`;

const PrevButton = styled.div`
  background: ${props => props.theme.color.white};
  display: grid;
  grid-auto-flow: column;
  border: none;
  align-items: center;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: 4vh 4vw;
`;

const P = styled.p`
  font-weight: ${props => props.theme.weight.bold};
`;

const ProjectPageButtons = props => {
  const { store } = useContext(Context);

  const pageTitle = props.props.match.path.replace("/projects/", "");
  const indexOfProject = store.projects.findIndex(
    item => item.link.replace(/ /g, "") === pageTitle
  );
  let next;
  let prev;

  const newArr = store.projects.filter(item => item.link !== pageTitle);

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
      <Link to={`/projects/${newArr[prev].link}`} onClick={toTop}>
        <PrevButton>
          <Svg src={leftArrow} alt="left arrow" />
          <P>{newArr[prev].name}</P>
        </PrevButton>
      </Link>
      <Link to={`/projects/${newArr[next].link}`} onClick={toTop}>
        <NextButton>
          <P>{newArr[next].name}</P>
          <Svg src={rightArrow} alt="right arrow" />
        </NextButton>
      </Link>
    </Container>
  );
};

export default ProjectPageButtons;
