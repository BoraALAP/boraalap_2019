import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  .transition-enter-active{
    transform: translateX(100vw);
    transition: 1000ms all;
    opacity: 0.01;
    
  }   

  .transition-enter-done{
    transform: translateX(0vw);
    transition: 1000ms all;
    opacity: 1;
  }         
  
  .transition-leave-active{
    transform: translateX(-100vw);
    transition: 1000ms all 500ms;
    opacity: 0.01;
    z-index: 100;
  }   
`
