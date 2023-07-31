import styled from 'styled-components';

export const StyledGrid = styled.div`

.container .div-title{
    color:blue;
    font-size:2.5rem;
    text-align:center;
    margin: 2rem 0 1rem;
}

.div-title .query-text{
    color:green;
}

.movies-container {
    display:flex;
    flex-wrap:wrap; 
    justify-content:space-between;
    padding: 2rem;
    max-width:1200px;
    margin: 0 auto;
}

.movies-container div{
    width: 30%;
    color:black;
    font-size:.8rem;
    margin-bottom: 2.5rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:pink;

    img{
        max-width:100%;
    }

    p,h2, img{
        margin-bottom:1rem;
    }

    svg{
        color:crimson;
    }

    a {
    background-color:hotpink;
    border: 2px solid hotpink;
    border-radius:5px;
    color:black;
    padding: 1rem 0.5rem;
    transition: .4s;
    text-align:center;
    font-weight:bold;
    } 
    
    a:hover{
      background-color:crimson;
      color:white;
      border: 2px solid crimson;
    }
}





`