import styled from 'styled-components';

export const StyledForm = styled.div`

form{
  display:flex;
  gap: 0.5rem;  

  input{
    padding:0.2rem 0.8rem;
    border-radius: 5px;
    border:none; 
    outline:none;
    };

 button{
    background-color:hotpink;
    border: 2px solid hotpink;
    border-radius:5px;
    color:black;
    padding: 0.3rem;
    display:flex;
    align-items:center;
    cursor:pointer;
    transition: .4s;

 
    } 
    
    button:hover{
      background-color:crimson;
      color:white;
      border: 2px solid crimson;
    }
    


}






`