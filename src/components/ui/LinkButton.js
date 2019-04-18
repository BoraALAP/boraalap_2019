import styled from 'styled-components';

export default styled.button`
    font-size: 14px;
    font-family: ${props => props.theme.font_header};
    font-weight: ${props => props.theme.bold};
    background: none;
    border: none;
    color: ${props => props.theme.gray };
    transition: 200ms all ease-in-out;

    &:hover {
        color: ${props => props.theme.black};
    }
`