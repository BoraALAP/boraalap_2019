import React from "react";

import Landing from "./Landing";

export default function HomePage(props) {
  const projects = [
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "Cottonist",
      platform: "Shopify Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "Cottonist"
    },
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "Ekar",
      platform: "UI / UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "cottonist"
    },
    {
      imageSrc: "https://source.unsplash.com/random/1200x600",
      name: "BonAPP",
      platform: "Redesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis viverra neque sit amet pretium. Vivamus non turpis felis. Pellentesque nec felis vitae dui tristique maximus vitae eu est. Nunc efficitur sed turpis id condimentum. Morbi sodales interdum risus. Donec quam elit, tristique sit amet ligula vel, dictum bibendum magna. Integer in venenatis purus, in cursus libero. Integer metus dolor, lacinia non nunc sed, tincidunt ultrices eros.",
      link: "cottonist"
    }
  ];

  return (
    <div>
      {projects.map(item => (
        <Landing
          key={item.name}
          imageSrc={item.imageSrc}
          name={item.name}
          platform={item.platform}
          description={item.description}
          link={item.link}
          changeSideBar={props.changeSideBar}
        />
      ))}
    </div>
  );
}
