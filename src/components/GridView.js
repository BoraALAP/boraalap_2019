import React, { useEffect } from "react";
import ProjectGridCard from "./ui/ProjectGridCard";
import styled from 'styled-components'
import Content from "./global/Content";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 4vw;
  align-content: center;
`

export default function GridView(props) {

  useEffect(() => {
    props.gridView()
    return () => props.clearIcon
  }, [])

  
  

  return (
    <Content>
    <Style>
      {props.projects.map((item, i) => (
        <ProjectGridCard
          key={i}
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
