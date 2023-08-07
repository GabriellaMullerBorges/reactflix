import styled from 'styled-components';

export const StyleMiniSearchForm = styled.div`
  width:60%;
  display:flex; 


form{
  display:flex;  
  justify-content:flex-end;
  width:100%;

  input{
    padding:0.2rem 0.8rem;
    border-top-left-radius: 5px; /* Ajuste o valor do border-radius para o efeito desejado */
    border-bottom-left-radius: 5px;
    border:none; 
    outline:none;
    z-index:2;
    width:40%;
    line-height:2rem;
    font-size:1.2rem;
    
    };

 button{
    background-color:orange;
    border: 2px solid orange;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 0.7rem;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition: .4s;
    z-index:2;
    } 
    
    button:hover{
      background-color:yellow;
      color:white;
      border: 2px solid yellow;
      z-index:2;
    }
}

@media(max-width: 700px) {

form{
  display:flex;  
  justify-content:center;
  width:100%;
}

}





`