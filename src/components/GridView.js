import React from 'react'
import DisplayProjects from "./DisplayProjects";

export default function GridView(props) {
  console.log(props);

  const {projects, slideNum} = props
  
  return (
    <div className="GridView">
    {projects.map((item, i) => (
      <DisplayProjects
        key={i}
        className={
          slideNum.activeNum === i ? "Active Landing" : "Landing"
        }
        imageSrc={item.imageSrc}
        name={item.name}
        platform={item.platform}
        description={item.description}
        link={item.link}
      />
    ))}
    </div>
  )
}
