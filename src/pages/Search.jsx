import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCards from '../components/MovieCards';

import { StyledGrid } from '../components/MovieGrid';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
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
  }, []);

  return (
    <StyledGrid>
      <div>
        <div className='container'>
          <h2 className='div-title'>
            Resultados para:<span className='query-text'>{query}</span>
          </h2>
          <div className="movies-container">
          {movies && movies.length === 0 && <p>Carregando...</p>}
          {movies && movies.length > 0 && movies.map((movie) => <MovieCards key={movie.id} movie={movie} />)}
          </div>
        </div>
      </div>
    </StyledGrid>
  );
};

export default Search;
