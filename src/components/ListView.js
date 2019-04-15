import React from "react";
import ProjectListCard from "./ui/ProjectListCard";

export default function ListView(props) {
  return (
    <div className="GridView">
      {props.projects.map((item, i) => (
        <ProjectListCard
          key={i}
          className={""}
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
