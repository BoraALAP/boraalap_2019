import React from "react";

import styled from "styled-components";

const Style = styled.div`
  width: ${props => props.hor ? "100%" : "1px" };
  background-color: ${props => props.theme.color.gray};
  height: ${props => props.hor ? "1px" : "100%" };
`;

export default function Divider() {
  return (
    <Style>
      <hr />
    </Style>
  );
}
