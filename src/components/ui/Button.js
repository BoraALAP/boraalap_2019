import styled, { css } from "styled-components";

import React from "react";
import {Link} from 'react-router-dom'

const Styled = styled.button`
  font-size: 14px;
  font-family: ${props => props.theme.font.header};
  font-weight: ${props => props.theme.weight.bold};
  background-color: ${props => props.theme.color.black};
  border: none;
  color: ${props => props.theme.color.white};
  padding: 20px 50px;
  box-shadow: ${props => props.theme.box_shadow};
  border-radius: 3px;
  transition: 200ms all ease-in-out;
  letter-spacing: 0.05em;
  
  ${props =>
    props.outline && 
    css`
      border: 1px solid ${props => props.theme.color.black};
      color: ${props => props.theme.color.black};
      background-color: transparent;
    `}

  &:hover {
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2), 3px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;


const Button = props => {
  return (
    <>
      {props.path ? (
        <Link onClick={props.onclick} to={props.path}>
          <Styled > {props.children} </Styled >
        </Link>
      ) : (
        <Styled>{props.children}</Styled >
      )}
    </>
  );
};

export default Button;
