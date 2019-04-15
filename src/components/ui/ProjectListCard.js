import React from 'react'

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {  
  return (
    <div className="ProjectCard">
       <img src={props.imageSrc} alt="Project" />
       <h6>{props.platform}</h6>
       <h2>{props.name}</h2>
       <Link className="dark" to={`projects/${props.link}`} onClick={props.changeSideBar}>See the Project</Link>
     </div>
  )
}

export default ProjectCard
