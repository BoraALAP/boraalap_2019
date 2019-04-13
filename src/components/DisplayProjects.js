import React from 'react';
import '../styles/components/DisplayProjects.scss'

import { Link } from 'react-router-dom';

export default function DisplayProjects(props) {
  return (
    <div className={props.className}>
      <img src={props.imageSrc} alt="Cottonist" />
      <h6>{props.platform}</h6>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <Link className="dark" to={`projects/${props.link}`} onClick={props.changeSideBar}>See the Project</Link>
    </div>
  )
}

