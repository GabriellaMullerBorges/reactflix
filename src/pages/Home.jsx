import React from 'react'
import { useState, useEffect } from 'react'
import MovieCards from '../components/MovieCards';
import Footer from '../components/Footer';
import Chamada from '../components/Chamada';
import { Nav } from '../components/Nav'
import { MenuMobile } from '../components/MenuMobile';

import { StyledGrid } from '../components/MovieGrid';

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

 const Home = () => {

 const [menuIsVisible, setMenuIsVisible]= useState(false);
 const [Movies, setMovies] = useState([])

 const getMovies = async (url) => {
    const res = await fetch (url);
    const data = await res.json();
    
    setMovies(data.results)
 };

 useEffect(() => {

    const displayMovies = `${movieURL}now_playing?${apiKey}`;

    getMovies(displayMovies);

 }, [])


    return (
      <>
      <MenuMobile
       menuIsVisible={menuIsVisible}
       setMenuIsVisible={setMenuIsVisible}
      />
         <Nav setMenuIsVisible={setMenuIsVisible}/>
      <Chamada></Chamada>
      <StyledGrid>
      <div className='container'> 
         <h2 className='div-title'> Nos cinemas: </h2>
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

export default Home;