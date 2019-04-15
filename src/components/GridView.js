import React from "react";
import ProjectGridCard from "./ui/ProjectGridCard";
import '../styles/components/GridView.scss'

export default function GridView(props) {
  const { projects, slideNum } = props;

  return (
    <div className="GridView">
      {projects.map((item, i) => (
        <ProjectGridCard
          key={i}
          className={slideNum.activeNum === i ? "Active GridProject" : "GridProject"}
          imageSrc={item.imageSrc}
          name={item.name}
          platform={item.platform}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}
