import "./Movie.css";
import React from 'react';
import './App.css';
import { getMovieList3 } from './api';
import { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import DetailMovie from './DetailMovie';

const App = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    getMovieList3().then((result) =>{
      setPopularMovies(result)
      setSplashScreenVisible(false);
    })
  }, [])
   
   
  const showMovieDetail = (movie) => {
    setSelectedMovie(movie);
  };
  
  return (
    <div className="App">
      {splashScreenVisible && <SplashScreen onFinish={() => setSplashScreenVisible(false)} />}
      
      <header className="App-header">
        <h1>Now Playing</h1>
        <div className="Movie-container">
          {selectedMovie ? (
            <DetailMovie movie={selectedMovie} />
          ) : (
            popularMovies.map((movie, i) => (
              <div
                className="Movie-wrapper"
                key={i}
                onClick={() => showMovieDetail(movie)}
              >
                <div className="Movie-title">{movie.title}</div>
                <img
                  className="Movie-image"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}

                />
                <div className="Movie-date">Release: {movie.release_date}</div>
                <div className="Movie-rate">Vote Average: {movie.vote_average}</div>
              </div>
            ))
          )}
        </div>
      </header>
    </div>
  );
};

export default App;

