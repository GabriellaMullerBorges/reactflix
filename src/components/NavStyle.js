import styled from 'styled-components';

export const StyledNav = styled.nav`


&:last-child {
      gap: 1rem;
    }

    > img {
      width: 230px;

      @media(max-width: 500px) {
        width: 100%;
      }
    }

#navbar{
position:sticky;
display:flex;
justify-content:space-between;
align-items:center;
padding: 1rem 2rem;
background-color:black;

 h1 a {
    display:flex;
    align-items:center;
    gap: 0.5rem;
    }

    a {
        font-size: 20px;
        position: relative;

        &:before {
          content: '';
          border-radius: 50px;
          bottom: 0px;
          position: absolute;
          width: 0%;
          height: 2px;
          background: white;
          transition: .3s;
        }

        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }

.mobile {
    display: none;
}


.links {
    display: flex;
    width:70%;
    align-items:center;
    justify-content:space-evenly
}


.div-botao {
    display:none;
  }

  
  @media(max-width: 700px) {

      #navbar{
        display: none;
      }

      .mobile {
        display: flex;
        justify-self: flex-end;
      }
   
    padding: 14.5px 16px;

    .div-botao {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

    h1{
      padding-left:1rem;
    }

   svg{
    color:orange;
    transform: scale(2);
   }

    }

    .div-botao:hover {
    cursor: pointer;
    }
  }

`