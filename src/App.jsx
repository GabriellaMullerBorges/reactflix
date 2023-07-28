import React from 'react'
import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'

import"./Geral.css"

import { Style } from './index.js'

import { Nav } from './components/Nav'

export function App() {
  return (
    <Style>
      <div className='App'>
      <Nav></Nav>
      <Link to='movie'>Movie</Link>
      <h1>Reactflix</h1>
            <Link to='/search'>Search</Link>
      <Outlet />
      </div>
    </Style>
  )
}

