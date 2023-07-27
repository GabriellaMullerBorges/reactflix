import React from 'react'
import { BiSearchAlt2} from 'react-icons/bi'

export function Searchform() {
  return (
    <form action="">
        <input type='text' placeholder='Buscar...' />
        <button type='submit'>
            <BiSearchAlt2></BiSearchAlt2>
        </button>
    </form>
  )
}
