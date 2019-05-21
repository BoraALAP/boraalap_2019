import React, { useState, useContext } from "react";

import { Context } from "../../data/store";

import { Link } from "react-router-dom";

import styled from "styled-components";

import Bio from "../../pages/Bio";
import Divider from "../ui/Divider";
import Grid from "../../assets/svg/grid.js";
import List from "../../assets/svg/list";
import LinkButton from "../ui/LinkButton";
import Svg from "../ui/Svg";

import { Media } from "../../styles/Media";

const SiteHeader = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.color.white};
  z-index: 1000;
  header {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    padding: 1em 2em;
    font-family: ${props => props.theme.font.header};
    align-items: center;
    grid-gap: 1vh;
    .rightSide {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 0.5em;
      justify-items: center;
      align-items: center;

      a {
        padding: 0.5em;
      }
      button {
        height: fit-content;
        color: ${props => props.theme.color.gray};
      }
    }
  }

  @media ${Media.mobileL} {
    header {
      grid-auto-flow: column;
      justify-content: space-between;
      padding: 1em 2.5em;
    }
  }
`;

const TitleContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: baseline;
  width: calc(100vw - 4em);
  justify-content: space-between;
  h3 {
    color: ${props => props.theme.color.gray_light};
    font-size: 1em;
    margin: inherit;
  }

  @media ${Media.mobileL} {
    grid-auto-flow: row;
    width: inherit;
    h3 {
      margin: 0.5em 0 0 1.5em;
    }
  }
`;

export default function Header(props) {
  const [bio, setBio] = useState({
    openState: false
  });
  const toggleBioModal = () => {
    setBio({ openState: !bio.openState });
  };

  const { store, dispatch } = useContext(Context);
  const { workView } = { ...store };

  return (
    <SiteHeader>
      <header>
        <TitleContainer>
          <Link
            to="/"
            onClick={() => dispatch({ type: "UPDATE_VIEW", view: undefined })}
          >
            <h1>Bora Alap</h1>
          </Link>
          <h3>Product Designer</h3>
        </TitleContainer>
        <div className="rightSide">
          <Link
            to="/list"
            onClick={() => dispatch({ type: "UPDATE_VIEW", view: "list" })}
          >
            <Svg alt="List Icon">
              <List color={workView === "list" ? "black" : "gray"} />
            </Svg>
          </Link>
          <Link
            to="/grid"
            onClick={() => dispatch({ type: "UPDATE_VIEW", view: "grid" })}
          >
            <Svg alt="Grid Icon">
              <Grid color={workView === "grid" ? "black" : "gray"} />
            </Svg>
          </Link>

          <Divider />
          <LinkButton onClick={toggleBioModal}>Bio</LinkButton>
        </div>
      </header>

      <Bio
        showModal={bio.openState}
        toggleBioModal={toggleBioModal}
        inProp={bio.openState}
      />
    </SiteHeader>
  );
}
