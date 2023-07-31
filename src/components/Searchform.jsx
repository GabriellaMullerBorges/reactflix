import React from 'react'
import { BiSearchAlt2} from 'react-icons/bi'
import { StyledForm } from './FormStyle'

export function Searchform() {
  return (
    <StyledForm>
      <form action="">
          <input type='text' placeholder='Buscar...' />
          <button type='submit'>
              <BiSearchAlt2></BiSearchAlt2>
          </button>
      </form>
    </StyledForm>
  )
}
