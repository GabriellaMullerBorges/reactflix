import styled, { css } from "styled-components";

export const MobileStyle = styled.section`


position: absolute; //para o popup do menu mobile
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height:100%;
  

  background: black; // envolto do mobile

  opacity:0;
  pointer-events:none; 
  transform: translateY(50px);
  transition: .5s;
 

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }
 
  //nav do mobile
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
  }


  ${({ isVisible}) => isVisible && css`
    opacity:1;
    pointer-events:auto;
    transform: translateY(0);
  
    > svg {
    transform: rotate(0deg);
    cursor: pointer;
    color:orange;
  }
  > svg:hover {
    color:yellow;
  }

  nav{
    transform: scale(1)
  }

  nav a:hover {
    color:yellow;
  }
  `
}

@media (min-width: 907px){
  display:none;
  overflow-y: scroll;
}




`