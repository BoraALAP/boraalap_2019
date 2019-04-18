import React, { useEffect } from "react";
import ProjectListCard from "./ui/ProjectListCard";
import styled from "styled-components";
import { Media } from "../styles/Media";
import Content from "./global/Content";


const Style = styled.div`
  align-items: center;
  align-content: center;
  padding: 0 10vw;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;

  @media ${Media.laptopL} {
    padding: 0 20vw; 
  }
  
`;

export default function ListView(props) {
  const { projects, slideNum } = props;



  useEffect(() => {
    props.listView()
    return () => props.clearIcon
  },[])

  return (
    <Content>
    <Style>
      {projects.map((item, i) => (
        <ProjectListCard
          key={i}
          className={
            slideNum.activeNum === i ? "Active" : ""
          }
          imageSrc={item.imageSrc}
          name={item.name}
          platform={item.platform}
          description={item.description}
          link={item.link}
        />
      ))}
    </Style>
    </Content>
  );
}
