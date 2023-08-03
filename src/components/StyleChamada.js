import styled from 'styled-components';

export const StyleChamada = styled.section`
height: 40rem;
display:flex;
z-index:0;
margin-bottom:5rem;
background: url(https://images.unsplash.com/photo-1458053688450-eef5d21d43b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80);
background-position:center;
background-size:cover;
background-repeat:no-repeat;
width:100%;


.container {
    width: 100%;
    z-index:0;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    backdrop-filter: grayscale(100%) blur(2px);;
    box-shadow: 0 -7px 10px 20px rgba(18, 18, 18, 0.6);
    
}

.chamada {
    font-size:5rem;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:2;
    height:fit-content;
    font-weight:bold;
    width: 100%;

    .chamada, .chamada-sub, .chamada-principal{
        z-index:2;
        height:fit-content;
        padding:0;
        margin:0;
    }
    .chamada-sub{
        font-size:2rem;
        font-weight:400;
        padding:2rem;
    }

    .searching {
        width:300px !important;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        background-color:red;
    }

}



`