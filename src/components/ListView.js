import React, { useState, useEffect, useContext } from "react";
import ProjectListCard from "./ui/ProjectListCard";
import styled from "styled-components";
import { Media } from "../styles/Media";
import { Context } from "../data/store";

import { toTop } from "../components/GlobalFunctions";

import VisibilitySensor from 'react-visibility-sensor'

const Style = styled.div`
  align-items: center;
  align-content: center;
  scroll-snap-type: none;
  overflow-y: auto;
  height: auto;
  grid-gap: 5em;
  display: grid;
  padding-top: 10em;

  @media ${Media.mobileL} {
    padding: 0 10vw;
    scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  display: block;

  }
`;

export default function ListView() {
  const { store, dispatch } = useContext(Context);

  const { projects, slideNum } = { ...store };
  const [num, setNum] = useState(store.slideNum)

  useEffect(() => {
    dispatch({type:'UPDATE_SLIDE_NUM', slideNum: num})
  }, [num]);

  useEffect(() => {
    toTop()
  }, [])

  const truncate = (text) => {
    return `${text.slice(0, 200)}...`;
    
  }
  
  return (
    <Style >
      {projects.map((item, i) => (
        <VisibilitySensor key={i} onChange={() => setNum(i)}>
        <ProjectListCard
          key={i}
          className={slideNum === i ? "ActiveProject" : ""}
          imageSrc={item.imageSrc}
          name={item.name}
          platform={item.platform}
          description={ truncate(item.description)}
          link={item.link}
        />
        </VisibilitySensor>
      ))}
    </Style>

  );
}
