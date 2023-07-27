import React from 'react'

import {Outlet} from 'react-router-dom'

import { Nav } from './components/Nav'

export function App() {
  return (
    <>
      <div className='App'>
      <h1>Reactflix</h1>
      <Nav></Nav>
      <Outlet />
      </div>
    </>
  )
}

