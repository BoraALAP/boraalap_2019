import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../styles/global/Header.scss";
import Bio from "../../pages/Bio";

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
        <button onClick={toggleBioModal}>Bio</button>
      </header>

      <Bio showModal={bio.openState} toggleBioModal={toggleBioModal} />
    </div>
  );
}
