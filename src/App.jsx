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
      <Outlet />
      </div>
    </Style>
  )
}

