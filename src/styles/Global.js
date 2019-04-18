import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900|Raleway:100,200,300,400,500,600,700,800,900');


  body {
    margin:0;
  }
  h2 {
    font-family: Playfair Display, serif;
    font-size: 2.5em;
    font-weight: bold;
    color: ${props => props.theme.black};
    margin: 0;
  }
  h3 {
    font-family: Playfair Display, serif;
    font-size: 2em;
    font-weight: bold;
    color: ${props => props.theme.black};
    margin: 0;
  }

  a {
    display: grid;
    color: black;
    text-decoration: none;
  }

  p {
    font-family: ${props => props.theme.font_body};
    font-size: 13px;
    color: ${props => props.theme.gray_dark};
    line-height: 2em;
    margin: 0;
    font-weight: medium;
  }

  small {
    font-family: ${props => props.theme.font_body};
    font-size: 12px;
    color: ${props => props.theme.gray_light};
  }

  img {
    width: 100%;
  }

`;