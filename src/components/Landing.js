import React, { Component } from 'react';
import '../styles/components/Landing.scss'

import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <img src={this.props.imageSrc} alt="Cottonist" />
        <h6>{this.props.platform}</h6>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <Link className="dark" to={`projects/${this.props.link}`}>See the Project</Link>
      </div>
    )
  }
}

