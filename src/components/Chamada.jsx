import React from 'react'
import { Searchform } from './Searchform'
import { StyleChamada } from './StyleChamada'

function Chamada() {
  return (
    <StyleChamada>
    <div className='container'>

        <div className='chamada'>
            <p className='chamada-principal'>Boas-vindas, cinéfilo</p>
            <p className='chamada-sub'>Explore um universo de filmes</p>
        </div>
        <div className='searching'>
            <Searchform></Searchform>
        </div>
    </div>
    </StyleChamada>
  )
}

export default Chamada