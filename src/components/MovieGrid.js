import styled from 'styled-components';

export const StyledGrid = styled.div`

.container .div-title{
    color:white;
    font-size:2.5rem;
    text-align:center;
    margin: 2rem 0 1rem;
}

.div-title .query-text{
    color:yellow;
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
    background-color:#0b0b0b;
    color:white;
    text-align:center; 
    border-radius:8px;
    font-size:1.1rem;
    

    img{
        max-width:95%;
        height:450px;
        margin-top:1rem;
    }

  h2, .poster-box{
        margin-bottom:1rem;
        font-size:1.8rem;
    }

    p{
        display:flex;
        box-sizing:border-box;
        flex-wrap: wrap;
        margin: 0 0.8rem 1rem;
        justify-content:center;
        align-items:center;
    }

    .poster-box{
        width:100%;
        background-color:#0b0b0b;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    svg{
        margin-right: 0.5rem;
        color:orange;
    }

    a {
    background-color:#131313;
    border: 2px solid #131313;
    border-radius:5px;
    color:black;
    padding: 1rem 0.5rem;
    transition: .4s;
    text-align:center;
    font-weight:bold;
    color:orange;
    } 
    
    a:hover{
      background-color:#c84600;
      color:white;
      border: 2px solid #c84600;
    }
}

.notfind{
    color:white;
    width:100%;
    text-align:center;
    font-size:2rem;
}





`