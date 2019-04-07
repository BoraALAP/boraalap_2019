import React from 'react'
import Landing from "../Landing";

import Sidebar from "../../components/global/Sidebar";

export default function Cottonist(props) {
  const projects = {
    imageSrc: "https://source.unsplash.com/random/1200x600",
    name: "Cottonist",
    platform: "Shopify Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
    link: "cottonist"
  };

  return (
    <div>
      <Sidebar location={props.match.path}/>
      <div className="Content">
        <Landing
          key={projects.name}
          imageSrc={projects.imageSrc}
          name={projects.name}
          platform={projects.platform}
          description={projects.description}
          link={projects.link}
        />
      </div>
    </div>
  );
}
