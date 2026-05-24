import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Favs from "./pages/Favs"
import {Route, Routes} from 'react-router-dom'

import PopularMovies from "./components/PopularMovies"
import TopRatedMovies from "./components/TopRatedMovies"
import NowPlayingMovies from "./components/NowPlayingMovies"
import WeeklyTrendingMovies from "./components/WeeklyTrendingMovies"
import MovieDetails from "./components/MovieDetails"
import { useParams } from "react-router-dom"

import { MovieProvider } from "./contexts/MovieContext"


function App() {

  return (
    <MovieProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favs/>} />
          <Route path="/popular-movies" element={<PopularMovies/>} />
          <Route path="/top-rated-movies" element={<TopRatedMovies/>} />
          <Route path="/now-playing-movies" element={<NowPlayingMovies/>} />
          <Route path="/trending-movies" element={<WeeklyTrendingMovies/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />

        </Routes>
    </MovieProvider>
  )
}

export default App
