import React from 'react'
import {Outlet} from 'react-router-dom'

import"./Geral.css"

import { Style } from './index.js'

export function App() {
  return (
    <Style>
      <div className='App'>   
      <Outlet />
      </div>
    </Style>
  )
}

