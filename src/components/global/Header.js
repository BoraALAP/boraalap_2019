import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import '../../styles/global/Header.scss'
import Bio from '../../pages/Bio';



export default class Header extends Component {
  constructor(){
    super();
    this.state = {
      showModal: false
    }
  }

  toggleBioModal = () => {
    this.setState ({ showModal : !this.state.showModal })
  }

  render() {
    return (
      <div className="Site-header">
        <header>
          <div>
            <Link to="/"><h1>Bora ALAP</h1></Link>
            <h3>UI / UX Designer</h3>
          </div>
          <button onClick={this.toggleBioModal}>Bio</button>
        </header>

        <Bio showModal={this.state.showModal} toggleBioModal={this.toggleBioModal} />
      </div>
    )
  }
}

