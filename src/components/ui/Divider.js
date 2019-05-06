import React from "react";

import styled from "styled-components";

import { Media } from '../../styles/Media'

const Style = styled.div`
  width: ${props => props.hor ? "50%" : "1px" };
  background-color: ${props => props.theme.color.gray};
  height: ${props => props.hor ? "1px" : "50%" };

  @media ${Media.mobileL}{
    height: ${props => props.hor ? "1px" : "100%" };
    width: ${props => props.hor ? "100%" : "1px" };
  }
  
`;

export default function Divider() {
  return (
    <Style>
      <hr />
    </Style>
  );
}
