import React from 'react';
import './DetailMovie.css';

const DetailMovie = ({ movie }) => {
    return (
    <div className="detail-movie">
      {movie.poster_path && (
        <img src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`} alt={movie.title} />
      )}
      <h2>{movie.title}</h2>
      <p>ID: {movie.id}</p>
      <p>Original Language: {movie.original_language}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
      <p>Popularity: {movie.popularity}</p>
      <p>Vote Count: {movie.vote_count}</p>
      <p>Vote Average: {movie.vote_average}</p>
    </div>
  );
};

export default DetailMovie;
