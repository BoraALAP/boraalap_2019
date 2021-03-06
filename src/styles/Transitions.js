import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  .transition-enter{
    transform: translateX(100vw);
    transition: ${props => props.theme.animation.fast} all;
    opacity: 0.01;
  }   

  .transition-enter.transition-enter-active{
    transform: translateX(0vw);
    transition: ${props => props.theme.animation.fast} all;
    opacity: 1;
  }  

  .transition-exit{
    transform: translateX(0vw);
    transition: ${props => props.theme.animation.fast} all;
    opacity: 1;
  }         
  
  .transition-exit.transition-exit-active{
    transform: translateX(-100vw);
    transition: ${props => props.theme.animation.fast} all;
    opacity: 0.01;
    z-index: 100;
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
  
      
    }
`
