import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled from 'styled-components'

import Bio from "../../pages/Bio";
import Divider from "../ui/Divider";
import Grid from "../../assets/svg/grid.js";
import List from "../../assets/svg/list";
import LinkButton from "../ui/LinkButton";

const SiteHeader = styled.div`
  position: fixed;
  width: 100vw;
  background-color: ${props => props.theme.color.white};

  header {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 15px 40px;
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
      grid-gap: 10px;
      justify-items: center;
      align-items: center;

      a {
        padding: 10px;
      }
      button {
        font-size: 1em;
        padding: 10px;
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
            <List color={(props.workIcon === 'list' ? 'black' : 'gray')}/>
          </Link>
          <Link to="/work" onClick={props.gridView}>
            <Grid color={(props.workIcon === 'grid' ? 'black' : 'gray')}/>
          </Link>

          <Divider />
          <LinkButton onClick={toggleBioModal}>Bio</LinkButton>
        </div>
      </header>

      <Bio showModal={bio.openState} data={data} toggleBioModal={toggleBioModal} />
      </SiteHeader>
  );
}
