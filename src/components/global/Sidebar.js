
import '../../styles/global/Sidebar.scss';

import mail from '../../assets/svg/mail.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import github from '../../assets/svg/github.svg';
import behance from '../../assets/svg/behance.svg';
import dribble from '../../assets/svg/dribble.svg';


import leftArrow from '../../assets/svg/arrow/left/black.svg';
import upArrow from '../../assets/svg/arrow/up/black.svg';
import downArrow from '../../assets/svg/arrow/down/black.svg';


import React, { Component } from 'react'

export default class Sidebar extends Component {
  

  render() {
    return (
      <div className="Sidebar">
        <div className="line"></div>

        {this.props.sideBar === true ? 
          <div className="projectNum">
            <button><img src={upArrow} alt="up arrow"/></button>
            <span id="currentProject">1</span>/<span id="totalProjects">6</span>
            <button><img src={downArrow} alt="down arrow"/></button>
          </div>
        : 
          <div className="projectNum">
            <button><img src={leftArrow} alt="left arrow"/></button>
          </div> }
        
        <div className="social">
          <ul>
            <li><a href="https://www.linkedin.com"><img alt="email" src={mail} /></a></li>
            <li><a href="https://www.linkedin2.com"><img alt="linkedin" src={linkedin} /></a></li>
            <li><a href="https://www.linkedin3.com"><img alt="github" src={github} /></a></li>
            <li><a href="https://www.linkedin4.com"><img alt="behance" src={behance} /></a></li>
            <li><a href="https://www.linkedin5.com"><img alt="dribble" src={dribble} /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}



