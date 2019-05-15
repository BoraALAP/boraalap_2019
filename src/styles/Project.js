import { createGlobalStyle } from "styled-components";
import { Media } from "./Media";

export default createGlobalStyle`
  .mobileImage{
    width: 80%;
    box-shadow: ${props => props.theme.image_shadow};

    @media ${Media.tablet} {
      width: 30%;
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



`;
