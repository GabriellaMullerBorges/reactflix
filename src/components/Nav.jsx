import React from 'react'
import { Link } from 'react-router-dom'
import {BiCameraMovie} from 'react-icons/bi'

export function Nav() {
  return (
    <nav id='navbar'>
        <h1>
            <Link to='/'>
                <BiCameraMovie />
                Reactflix
            </Link>
        </h1>
            <Link to='movie'>Movie</Link>
            <Link to='/search'>Search</Link>
    </nav>
  )
}

