import React from 'react'
import { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCards';
import Footer from '../components/Footer';
import { MiniNav } from '../components/MiniNav';

import { StyledGrid } from '../components/MovieGrid';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

 const UpComing = () => {
 const [Movies, setMovies] = useState([])

 const getMovies = async (url) => {
    const res = await fetch (url);
    const data = await res.json();
    
    setMovies(data.results)
 };

 useEffect(() => {

    const displayMovies = `${movieURL}upcoming?${apiKey}`;

    getMovies(displayMovies);

 }, [])


    return (
      <>
      <MiniNav></MiniNav>
      <StyledGrid>
      <div className='container'> 
         <h2 className='div-title'> Em Breve: </h2>
         <div className="movies-container">
                  {Movies.length === 0 && <p>Carregando...</p>}
                  {Movies.length>0 && Movies.map((movie) => <MovieCards key={movie.id} movie={movie}/>) }
         </div>  
      </div>
    </StyledGrid>
    <Footer></Footer>
    </>
    
  )
};

export default UpComing;