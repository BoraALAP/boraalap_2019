import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../../styles/global/Sidebar.scss";

import mail from "../../assets/svg/mail.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";
import behance from "../../assets/svg/behance.svg";
import dribble from "../../assets/svg/dribble.svg";

import leftArrow from "../../assets/svg/arrow/left/black.svg";
import upArrow from "../../assets/svg/arrow/up/black.svg";
import downArrow from "../../assets/svg/arrow/down/black.svg";

export default function Sidebar(props) {
  const [state, setState] = useState({
    sideBar: false
  });

  const changeSideBar = () => {
    setState({ sideBar: !state.sideBar });
  };

  console.log(props.match.path);
  
  const location = props.location;

  const sidebarBack = (<div className="projectNum">
  <Link to="/">
    <button onClick={changeSideBar}>
      <img src={leftArrow} alt="left arrow" />
    </button>
  </Link>
</div>)

const sidebarHome = (
  <div className="projectNum">
    
  </div>
)



 

  return (
    <div className="Sidebar">
      <div className="Contollers">
        <div className="line" />
        {true ? sidebarBack : sidebarHome}
        <div className="line" />
        
      </div>

      <div className="social">
        <ul>
          <li>
            <a href="https://www.linkedin.com">
              <img alt="email" src={mail} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin2.com">
              <img alt="linkedin" src={linkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin3.com">
              <img alt="github" src={github} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin4.com">
              <img alt="behance" src={behance} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin5.com">
              <img alt="dribble" src={dribble} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
