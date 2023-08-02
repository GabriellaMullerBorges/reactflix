import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs'
import { MovieStyle } from './MovieStyle';
import MovieCards from '../components/MovieCards';
import Footer from '../components/Footer';

const movieDetailedURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

 function formatarMoeda(number) {
    
    const moeda = number.toLocaleString("en-US", {
      style: 'currency',
      currency: 'USD',
    })

    let formattedNumber = moeda.replace(/\,/g, '.');
    let formattedint = formattedNumber.replace(/,(?=\d{2}$)/g, ',');
    let formattednew = formattedint.replace(/\.(?=\d{2}$)/, ',');

 console.log(formattednew)
    return formattednew;
  };


  useEffect(() => {
    const fetchMovieURL = `${movieDetailedURL}${id}?${apiKey}`;
    try {
      getMovie(fetchMovieURL);
      console.log(fetchMovieURL)
    } catch (error) {
      console.error(error);
    }
  }, [id]); 

  return (
    <>
    <MovieStyle>
    <div className='page-filme'>
    {movie && (
    <div className='filme-infos'>
      <div className='filme-card'>
        <MovieCards movie={movie} showLink={false}/>
      </div>
      <div className="filme-detalhes">
      <h2>{movie.title}</h2>
    <p className='tagline'>{movie.tagline}</p>
    <div className='info'>
        <h3>
          <BsWallet2/>Orçamento:
        </h3>
        <p>{formatarMoeda(movie.budget)}</p>
    </div>
    <div className="info">
        <h3> 
          <BsGraphUp/>Faturamento:
        </h3>
        <p>{formatarMoeda(movie.revenue)}</p>
    </div>
    <div className="info">
        <h3>
          <BsHourglassSplit/>Duração:
        </h3>
        <p>{movie.runtime} min</p>
    </div>
    <div className="info descricao">
      <h3>
        <BsFillFileEarmarkTextFill/>Descrição:
      </h3>
      <p>{movie.overview}</p>
      </div>
      </div>
    </div>

  )}
  </div>
  
  </MovieStyle>
  <Footer></Footer>
  </>
  )
}
  

export default Movie;
