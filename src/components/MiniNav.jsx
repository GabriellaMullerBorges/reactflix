import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie} from 'react-icons/bi'
import { MiniSearchform } from './MiniSearchForm'
import { RiMenu3Fill } from 'react-icons/ri';
import { StyledNav } from './NavStyle'

export function MiniNav({ setMenuIsVisible }) {

  return (
  <>
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
        <MiniSearchform></MiniSearchform>        
    </nav>
    
    <section className="div-botao">
          <h1>
              <Link to='/'>
                  <BiCameraMovie style={{ marginRight: '1rem' }}/>
                  Reactflix
              </Link>
          </h1>
          <MiniSearchform/>
          <div className='menu-burguer'>  
            <RiMenu3Fill onClick={() => setMenuIsVisible(true)} className="mobile"/>
          </div>  
      </section>
    </StyledNav>
    </>
  )
}