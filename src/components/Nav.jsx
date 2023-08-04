import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie} from 'react-icons/bi'
import { StyledNav } from './NavStyle'

export function Nav() {

  return (
    <StyledNav>
      <nav id='navbar'>
          <h1>
              <Link to='/'>
                  <BiCameraMovie />
                  Reactflix
              </Link>
          </h1>    
          <div className='links'>
            <p> 
                <Link to='/top'>
                    Top Filmes  
            </Link>
            </p>
            <p> 
                <Link to='/upcoming'>
                    Em Breve  
            </Link>
            </p>
        </div>    
      </nav>
    </StyledNav>
  )
}

