import React from "react";
import styled from "styled-components";

const MultiUl = styled.ul`
  grid-gap: 16px;

  p{
    font-weight: ${props => props.theme.weight.regular}
  }
`;

export const Simple = props => {
  return (
    <div>
      <ul>
        {props.list.map((entry, i) => (
          <li key={i}>
            <p>{entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const BioListing = props => {
  return (
    <div>
      <MultiUl>
        {props.list.map((entry, i) => (
          <li key={i}>
            <h6>{entry.title}</h6>
            <p>{entry.note}</p>
          </li>
        ))}
      </MultiUl>
    </div>
  );
};
