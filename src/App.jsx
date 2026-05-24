import Home from "./pages/Home"
import Search from "./pages/Search"
import NavBar from "./components/NavBar"
import Favs from "./pages/Favs"
import { Route, Routes, Navigate } from 'react-router-dom'

import PopularMovies from "./components/PopularMovies"
import TopRatedMovies from "./components/TopRatedMovies"
import NowPlayingMovies from "./components/NowPlayingMovies"
import WeeklyTrendingMovies from "./components/WeeklyTrendingMovies"
import ShowSearchMovies from "./components/ShowSearchMovies"
import MovieDetails from "./components/MovieDetails"


import { MovieProvider } from "./contexts/MovieContext"


function App() {

  return (
    <MovieProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/favorites" element={<Favs/>} />
          <Route path="/popular-movies" element={<PopularMovies/>} />
          <Route path="/top-rated-movies" element={<TopRatedMovies/>} />
          <Route path="/now-playing-movies" element={<NowPlayingMovies/>} />
          <Route path="/trending-movies" element={<WeeklyTrendingMovies/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </MovieProvider>
  )
}

export default App
