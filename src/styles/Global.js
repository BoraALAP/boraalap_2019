import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Raleway:100,200,300,400,500,600,700,800,900');


  body {
    margin:0;
    &.ReactModal__Body--open{
      overflow:hidden;
    }
  }
  h2 {
    font-family: ${props => props.theme.font.header};
    font-size: 2.5em;
    font-weight: ${props => props.theme.weight.bold};
    color: ${props => props.theme.color.black};
    margin: 0;
  }
  h3 {
    font-family: ${props => props.theme.font.header};
    font-size: 2em;
    font-weight: ${props => props.theme.weight.bold};
    color: ${props => props.theme.color.black};
    margin: 0;
  }

  h4{
    margin: 0;
  }

  h6{
    font-family: ${props => props.theme.font.body};
    color: ${props => props.theme.color.gray_dark};
    margin: 0;
    font-size: 0.825em;
  }

  a {
    display: grid;
    text-decoration: none;
    color: ${props => props.theme.color.black};
    
  }

  p {
    font-family: ${props => props.theme.font.body};
    font-size: 0.813em;
    color: ${props => props.theme.color.gray_dark};
    line-height: 2.2em;
    margin: 0;
    font-weight: ${props => props.theme.weight.medium};
  }

  small {
    font-family: ${props => props.theme.font.body};
    font-size: 0.8em;
    color: ${props => props.theme.color.gray_light};
  }

  img {
    width: 100%;
  }

  .ReactModal__Overlay{
  overflow-y:scroll;
  z-index: 10000;
  }
  
`;
