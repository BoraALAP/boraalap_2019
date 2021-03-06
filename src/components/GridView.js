import React, { useContext, useEffect } from "react";
import ProjectGridCard from "./ui/ProjectGridCard";
import styled from "styled-components";
import ProjectWrapper from "../components/projectItems/ProjectWrapper";
import { Context } from '../data/store'

import { toTop } from "../components/GlobalFunctions";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
  grid-gap: 4vw;
  align-content: center;
`;

export default function GridView() {
  const {store} = useContext(Context)

  useEffect(() => {
    toTop()
  }, [])

  return (
    <ProjectWrapper padding>
    <Style>
      
      {store.projects.map((item, i) => (
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
    </ProjectWrapper>
  );
}
