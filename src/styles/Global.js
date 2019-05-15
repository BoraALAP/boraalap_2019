import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Raleway:100,200,300,400,500,600,700,800,900');


  body {
    margin:0;
    &.ReactModal__Body--open{
      overflow:hidden;
    }
  }
  h1 {
    font-size: 1.5em;
    margin: 0;
  }
  h2 {
    font-family: ${props => props.theme.font.header};
    font-size: 1.75em;
    font-weight: ${props => props.theme.weight.bold};
    color: ${props => props.theme.color.black};
    margin: 0;
  }
  h3 {
    font-family: ${props => props.theme.font.header};
    font-size: 1.25em;
    font-weight: ${props => props.theme.weight.bold};
    color: ${props => props.theme.color.black};
    margin: 0;
  }

  h4{
    margin: 0;
    font-size: 1em;
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
    font-size: 0.75em;
    color: ${props => props.theme.color.gray_light};
  }

  img {
    width: 100%;
  }

  ul{
    padding-left: 1em;
    margin: 0;
    padding-left: 2em;
    display: grid;
    li{
      list-style-type: square;
      p{
        color: ${props => props.theme.color.gray};
        font-weight: ${props => props.theme.weight.bold};
      }
    }
  }



  .line {
      width: 1px;
      background-color: ${props => props.theme.color.gray_lighter};
    }

  .ReactModal__Overlay{
  z-index: 10000;
  opacity: 0;
  transition: opacity ${props => props.theme.animation.fast} ease;
  overflow-y:scroll;
    &--after-open{
      opacity: 1;
    }

    &--before-close{
      opacity: 0;
    }

    .ReactModal__Content{
    transform: translateX(100vw);
    
    transition: transform ${props => props.theme.animation.fast} 0.6s ease;
    &--after-open{
      transform: translateX(0vw);
    }

    &--before-close{
      transform: translateX(100vw);
    }
  }
  }

  



  @media ${Media.mobileL}{
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;  
    }
    h4{
    margin: 0;
    font-size: 1.25em;
  }
  }
`;
