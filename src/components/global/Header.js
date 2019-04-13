import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../styles/global/Header.scss";
import Bio from "../../pages/Bio";
import DividerV from "../ui/DividerV"
import list from "../../assets/svg/list.svg";
import grid from "../../assets/svg/grid.svg";

export default function Header() {
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
          <Link to="/list">
            <img src={list} alt="list icon" />
          </Link>
          <Link to="/">
            <img src={grid} alt="grid icon" />
          </Link>

          <DividerV />
          <button onClick={toggleBioModal}>Bio</button>
        </div>
      </header>

      <Bio showModal={bio.openState} toggleBioModal={toggleBioModal} />
    </div>
  );
}
