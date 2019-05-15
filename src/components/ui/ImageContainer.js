
import styled from "styled-components";

const ImageContainer = styled.div`
  background-image: url(${props => props.imageSrc});
  height: ${props => props.height ? props.height : '30vh'} ;
  width: 100%;
  background-position: center;
  background-size: cover;
  box-shadow: ${props => props.theme.image_shadow};
`


export default ImageContainer
