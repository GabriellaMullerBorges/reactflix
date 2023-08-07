import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCards from '../components/MovieCards';
import Footer from '../components/Footer';
import { MiniNav } from '../components/MiniNav';
import { MenuMobile } from '../components/MenuMobile';

import { StyledGrid } from '../components/MovieGrid';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {

  const [menuIsVisible, setMenuIsVisible]= useState(false);

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const displaySearchedMovies = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(displaySearchedMovies);
  }, [query]);

  return (
    <>
        <MenuMobile
       menuIsVisible={menuIsVisible}
       setMenuIsVisible={setMenuIsVisible}
      />
         <MiniNav setMenuIsVisible={setMenuIsVisible}/>
    <StyledGrid>
      <div className='page'>  
      <div>
        <div className='container'>
          <h2 className='div-title'>
            Resultados para:<span className='query-text'>{query}</span>
          </h2>
          <div className="movies-container">
          {movies && movies.length === 0 && <p className='notfind'> Não encontramos resultados para sua pesquisa</p>}
          {movies && movies.length > 0 && movies.map((movie) => 
              <MovieCards key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    <Footer></Footer>
    </div>
    </StyledGrid>
    </>
  );
};

export default Search;
