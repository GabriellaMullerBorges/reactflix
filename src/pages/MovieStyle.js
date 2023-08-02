import styled from 'styled-components';

export const MovieStyle = styled.nav`


.page-filme{
    width: 80%;
    display:flex;
    margin: 2rem auto;
    color: white;
    background-color:#0b0b0b;
    padding:1rem;
    border-radius:28px;
}

.filme-infos{
    width:100%;
    display:flex;
    flex-direction:row;
    font-size: 1.2rem;
}

.filme-card, .filme-detalhes {
    width:50%;
}

.filme-detalhes{
    h2{
        width:100%;
        text-align:center;
        font-size:2rem;
    }
}

.page-filme .movie-card{
    text-align:center;
}

.movie-card {

    img{
        margin-top: 3rem;
    }
    img, h2 p{
    margin-bottom:0.5rem;
    }

    h2{
    font-size:3rem;
    }
    p{
        display:flex;
        align-self:center;
        justify-content:center;
        gap: 0.4rem;
    }
}

.tagline{
 text-align:center;
 font-size:1.3rem;
 margin-bottom:2rem;
}

.info {
    margin-bottom:1rem;

    h3{
       margin-bottom:1rem;
       display:flex;
       align-items:center;
       gap: 0.4rem;
    }
}

.descricao {
    line-height: 1.8rem;
}
`