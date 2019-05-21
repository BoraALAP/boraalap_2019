import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export default createGlobalStyle`
  .mobileImage{
    width: 100%;
    max-width: 375px;
    box-shadow: ${props => props.theme.image_shadow};

    &.noShadow{
      box-shadow:none;
    }

    @media ${Media.tablet} {
      width: 100%;
    }

    &.blur{
      filter: blur(10px);
    }
  }

  .desktopImage{
    width: 100%;
    box-shadow: ${props => props.theme.image_shadow};

    @media ${Media.tablet} {
      width: 100%;
    }
  }

  .desktopImage60{
    width: 100%;
    box-shadow: ${props => props.theme.image_shadow};

    @media ${Media.tablet} {
      width: 60%;
    }
  }

  .colorText {
    padding: 2em;
    background: ${props => props.theme.color.white};
    align-items: center;
    &--gray{
      background: ${props => props.theme.color.gray_lightest};
      padding:4vw;
      margin-bottom: 2em;
    }

    &.twoColumn{
      display: grid;
      grid-gap: 2em;
      grid-auto-flow: row;
      justify-content: inherit;
  
      @media ${Media.tablet} {
        grid-auto-flow: column;
        justify-content: space-between;
      }
    }
  }

  .container{
    display: grid;
    justify-items: center;
    grid-gap: 4em;

    div {
      grid-gap: 2em;
      display: grid;
      justify-content: center;
      width: 100%;
    }

    .multiColumns {
      
      @media ${Media.tablet} {
        
        div {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          justify-items: center;
          width:70vw;
        }
      }
    }
  }
`;
