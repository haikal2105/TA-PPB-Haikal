// App.js
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Popular from "./Popular";
import TopRated from './TopRated';
import Profile from './Profile';
import DetailMovie from './DetailMovie';
import NowPlaying from './NowPlaying';
function App() {
  
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
         <Link to="/" className="iconWrapper">
            Now Playing
          </Link>
          <Link to="/Popular" className="iconWrapper">
            Most Popular
          </Link>
          <Link to="/TopRated" className="iconWrapper">
            Top Rated
          </Link>
          <Link to="/profile" className="iconWrapper">
            Profile
          </Link>
          
        </div>
        <main>
          <Routes>
            <Route path="/Popular" element={<Popular />} />
            <Route path="/TopRated" element={<TopRated />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Detail/:id" element={<DetailMovie />} />
            <Route path="/" element={<NowPlaying />} />
          </Routes>
        </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
