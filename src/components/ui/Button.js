import styled, { css } from "styled-components";

const outline = css`
  border: 1px solid ${props => props.theme.black};
  color: ${props => props.theme.black};
`;

const solid = css`
  border: none;
  color: ${props => props.theme.white};
`;

export default styled.button`
  font-size: 14px;
  font-family: ${props => props.theme.font_header};
  font-weight: ${props => props.theme.bold};
  background-color: ${props => (props.outline ? "transparent" : "black")};
  ${props => (props.outline ? outline : solid)};
  padding: 20px 50px;
  box-shadow: ${props => props.theme.box_shadow};
  border-radius: 3px;
  transition: 200ms all ease-in-out;

  &:hover {
    box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2), 3px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;
