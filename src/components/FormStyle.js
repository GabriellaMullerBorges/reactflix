import styled from 'styled-components';

export const StyledForm = styled.div`
  min-width:700px;
  display:flex; 
  margin-top:1rem; 

form{
  display:flex;  
  justify-content:center;
  width:100%;

  input{
    padding:0.2rem 0.8rem;
    border-top-left-radius: 5px; /* Ajuste o valor do border-radius para o efeito desejado */
    border-bottom-left-radius: 5px;
    border:none; 
    outline:none;
    z-index:2;
    width:80%;
    line-height:2rem;
    font-size:1.2rem;
    
    };

 button{
    background-color:orange;
    border: 2px solid orange;
    border-top-right-radius: 5px; /* Ajuste o valor do border-radius para o efeito desejado */
    border-bottom-right-radius: 5px;
    color:black;
    padding: 0.7rem;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition: .4s;
    z-index:2;
    } 
    
    button:hover{
      background-color:crimson;
      color:white;
      border: 2px solid crimson;
      z-index:2;
    }
}

@media(max-width: 700px) {

   min-width:0;
   width:100%;

  }






`