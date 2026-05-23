import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Favs from "./pages/Favs"
import {Route, Routes} from 'react-router-dom'

import { MovieProvider } from "./contexts/MovieContext"


function App() {

  return (
    <MovieProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favs/>} />
        </Routes>
    </MovieProvider>
  )
}

export default App
