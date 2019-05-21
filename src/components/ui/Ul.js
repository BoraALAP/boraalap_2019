import React from "react";
import styled from "styled-components";

const MultiUl = styled.ul`
  grid-gap: 1em;

  p {
    font-weight: ${props => props.theme.weight.regular};
  }
`;

const ProjectUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(min-content, 143px));
  justify-items: start;
  grid-gap:1em;
  padding: 0;
  li {
    display: grid;
    background: ${props => props.theme.color.gray_lighter};
    border-radius: 2em;
    padding: 0.2em 1em;
    width: max-content;
    h6 {
      color: ${props => props.theme.color.white};
    }
  }
`;

export const Simple = props => {
  return (
    <>
      <ul>
        {props.list.map((entry, i) => (
          <li key={i}>
            <p>{entry}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const BioListing = props => {
  return (
    <>
      <MultiUl>
        {props.list.map((entry, i) => (
          <li key={i}>
            <h6>{entry.title}</h6>
            <p>{entry.note}</p>
          </li>
        ))}
      </MultiUl>
    </>
  );
};

export const ProjectListing = props => {
  return (
    <>
      <ProjectUl className="listing">
        {props.list.map((entry, i) => (
          <li key={i}>
            <h6>{entry}</h6>
          </li>
        ))}
      </ProjectUl>
    </>
  );
};
