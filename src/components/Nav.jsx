import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie} from 'react-icons/bi'
import { Searchform } from './Searchform'
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
          <Searchform></Searchform>
            
      </nav>
    </StyledNav>
  )
}

