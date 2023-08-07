import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt2} from 'react-icons/bi'
import { StyleMiniSearchForm } from './StyleMiniSearchForm'

export function MiniSearchform() {

    const [ search, setSearch] = useState("");
    const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  
    if(!search) return ;
    navigate(`/search?query=${search}`);
    setSearch("")
  }

  return (
    <StyleMiniSearchForm>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Buscar...' onChange={(e) => setSearch (e.target.value)}
        value={search}/>
        <button type='submit'>
            <BiSearchAlt2></BiSearchAlt2>
        </button>
    </form>
    </StyleMiniSearchForm>
  )
}