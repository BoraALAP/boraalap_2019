import React, { useState, useContext } from "react";
import ProjectListCard from "./ui/ProjectListCard";
import styled from "styled-components";
import { Media } from "../styles/Media";
import { Context } from "../data/store";

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

export default function ListView() {
  const { store, dispatch } = useContext(Context);

  const { projects, slideNum } = { ...store };

  const [position, setPosition] = useState(0);

  const handleScroll = e => {
    e.persist();
      
    const window = e.target.scrollTop;
    if (position > window) {
      return dispatch({ type: "PREV_SLIDE" });
    } else if (position < window) {
      return dispatch({ type: "NEXT_SLIDE" });
    }
    setPosition(window);
    
  };
  console.log(position);
  return (
    <Style onScroll={handleScroll}>
      {projects.map((item, i) => (
        <ProjectListCard
          key={i}
          className={slideNum === i ? "Active" : ""}
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
