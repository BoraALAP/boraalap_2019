import React from "react";
import "../../styles/components/ui/ProjectGridCard.scss";

import { Link } from "react-router-dom";
import Button from "./Button";

export default function ProjectGridCard(props) {
  return (
    <div className={props.className}>
      <img src={props.imageSrc} alt="Project" />
      <div className="topSide">
        <small>{props.platform}</small>
        <h2>{props.name}</h2>
      </div>
      <div className="bottomSide">
      <p>{props.description}</p>
      <Link to={`projects/${props.link}`} onClick={props.changeSideBar}>
        <Button className={"dark"}>See the Project</Button>
      </Link>
      </div>
    </div>
  );
}
