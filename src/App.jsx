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
// import GetQr from "./components/MyTickets"
import MyTickets from "./components/MyTickets"
// import {MyQrProvider} from "./components/Tickets"


import { MovieProvider } from "./contexts/MovieContext"
import { TicketContext } from "./contexts/TicketContext"


function App() {

  const ticketContextValue = [436969, 718444];

  // const ticketContextValue = [{ id: 436969, 
  //                               eventDate: "2024-07-15",
  //                               eventTime: "10:30",
  //                               TicketBuyingLastDate: "2024-07-14",
  //                             },
  //                             { id: 718444, 
  //                               eventDate: "2024-07-16",
  //                               eventTime: "09:00",
  //                               TicketBuyingLastDate: "2024-07-15",
  //                             }];

  return (
    <TicketContext.Provider value={ticketContextValue}>
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
          <Route path="/tickets" element={<MyTickets />} />
        </Routes>
    </MovieProvider>
    </TicketContext.Provider>
  )
}

export default App
