import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import { searchMovies, getPopularMovies } from '../services/api'
import '../css/Home.css'


function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err)
                setError("Failed to load movies..")
            }  
        }

        loadPopularMovies()
    }, [] )
    


    const handleSearch = async (e) => {
        e.preventDefault() //prevents the search bar from clearing
        if(!searchQuery.trim()) return

        try {
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults)
            }
            catch (err) {
                console.log(err)
                setError("Failed to load movies..")
            }  
    }

    return (
        <div className="home">

            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" 
                className='search-input' 
                placeholder='Search for movies...' 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button' >Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(
                (movie) => 
                (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    );


}
export default Home