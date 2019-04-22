import React, { useEffect, useState } from "react";
import ProjectListCard from "./ui/ProjectListCard";
import styled from "styled-components";
import { Media } from "../styles/Media";

const Style = styled.div`
  align-items: center;
  align-content: center;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  @media ${Media.laptop} {
    padding: 0 10vw;
  }
`;

export default function ListView(props) {
  const { projects, slideNum } = props;
  const [position, setPosition] = useState(0);

  console.log(`${position} plain`);
  useEffect(() => {
    console.log(`${position} effect`);
    return () => props.clearIcon;
  }, []);

  const handleScroll = e => {
    e.persist();

    const window = e.target.scrollTop;
    if (position > window) {
      return props.prevSlide;
    } else if (position < window) {
      return props.nextSlide;
    }
    setPosition(position => window);
    console.log(position);
  };

  return (
    <Style onScroll={handleScroll}>
      {projects.map((item, i) => (
        <ProjectListCard
          key={i}
          className={slideNum.activeNum === i ? "Active" : ""}
          imageSrc={item.imageSrc}
          name={item.name}
          platform={item.platform}
          description={item.description}
          link={item.link}
        />
      ))}
    </Style>
  );
}
