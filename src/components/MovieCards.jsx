import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'


const imageURL =  import.meta.env.VITE_IMG;

const MovieCards = ({movie, showLink = true}) => {
  return (
    <div className="movie-card">
      <div className='poster-box'>
      <Link to={`/movie/${movie.id}`}>
        <img src={imageURL + movie.poster_path} alt={movie.title} className="poster" />
      </Link>
      </div>
        <h2>{movie.title}</h2>
        <p>
            <FaStar />{movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link> }
    </div>
  )
}

export default MovieCards