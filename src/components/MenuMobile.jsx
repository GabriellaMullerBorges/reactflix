import { MobileStyle } from './MobileStyle';
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { useEffect } from 'react';

export function MenuMobile({menuIsVisible, setMenuIsVisible }) {
   useEffect(() => {
       document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);
    
return (
    <MobileStyle isVisible={menuIsVisible}> 
        <IoClose size={40} onClick={() => setMenuIsVisible(false)}/>
        <nav>          
            <a href="#home">
                <Link to='/'>
                  Home
              </Link>
            </a>
            <a href="#top"> 
                <Link to='/top'>
                    Top Filmes  
                </Link>
            </a>
            <a href="#upcoming"> 
            <Link to='/upcoming'>
                    Em Breve  
            </Link>
            </a>
        </nav>
    </MobileStyle>    
)
}