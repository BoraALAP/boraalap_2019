import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../styles/global/Header.scss";
import Bio from "../../pages/Bio";
import DividerV from "../ui/DividerV";
import Grid from "../../assets/svg/grid.js";
import List from "../../assets/svg/list";


export default function Header(props) {
  const [bio, setBio] = useState({
    openState: false
  });
  const toggleBioModal = () => {
    setBio({ openState: !bio.openState });
  };

  
  return (
    <div className="Site-header">
      <header>
        <div>
          <Link to="/">
            <h1>Bora ALAP</h1>
          </Link>
          <h3>UI / UX Designer</h3>
        </div>
        <div className="rightSide">
          <Link to="/" onClick={props.listView}>
            <List className={props.gridIcon ? '' : 'black'}/>
          </Link>
          <Link to="/" onClick={props.gridView}>
            <Grid className={props.gridIcon ? 'black' : ''}/>
          </Link>

          <DividerV />
          <button onClick={toggleBioModal}>Bio</button>
        </div>
      </header>

      <Bio showModal={bio.openState} toggleBioModal={toggleBioModal} />
    </div>
  );
}
