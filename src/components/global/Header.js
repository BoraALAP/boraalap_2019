import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from 'styled-components'

import Bio from "../../pages/Bio";
import Divider from "../ui/Divider";
import Grid from "../../assets/svg/grid.js";
import List from "../../assets/svg/list";
import LinkButton from "../ui/LinkButton";
import Svg from "../ui/Svg";

const SiteHeader = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.color.white};
  z-index: 1000;
  header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 1em 2.5em;
    font-family: ${props => props.theme.font.header};
    align-items: center;
 

    div {
      h1 {
        font-size: 2.5em;
        margin: 0;
      }
      h3 {
        color: ${props => props.theme.color.gray};
        font-size: 1em;
        margin: 5px 0 0 25px;
      }
    }

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
`



export default function Header(props) {
  const [bio, setBio] = useState({
    openState: false
  });
  const toggleBioModal = () => {
    setBio({ openState: !bio.openState });
  };

  const data = {...props.data}

  
  return (
    <SiteHeader>
      <header>
        <div>
          <Link to="/" onClick={props.clearIcon}>
            <h1>Bora Alap</h1>
          </Link>
          <h3>Product Designer</h3>
        </div>
        <div className="rightSide">
          <Link to="/work" onClick={props.listView}>
            <Svg alt="List Icon">
            <List color={(props.workIcon === 'list' ? 'black' : 'gray')}/>
            </Svg>
          </Link>
          <Link to="/work" onClick={props.gridView}>
            <Svg alt="Grid Icon">
            <Grid color={(props.workIcon === 'grid' ? 'black' : 'gray')}/>
            </Svg>
          </Link>

          <Divider />
          <LinkButton onClick={toggleBioModal}>Bio</LinkButton>
        </div>
      </header>

      <Bio showModal={bio.openState} data={data} toggleBioModal={toggleBioModal} />
      </SiteHeader>
  );
}
