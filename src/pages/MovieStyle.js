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
    padding-left:1rem;
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
 display: flex;
 flex-direction: column;
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

@media (max-width: 1270px) {

    .page-filme {
    width:100%;
    height:fit-content;
    margin:0;
    padding:0;

}

.filme-infos{
    display:flex;
    flex-direction:column;
}

.filme-card{
    width:100%
}

.movietitle{
    display: none;
}

.filme-detalhes, .info {
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}

.descricao-texto{
    padding:0 1.2rem;
}

}

@media (max-width: 1270px){

    .page-filme {
    border-radius:0;
    }
}

`