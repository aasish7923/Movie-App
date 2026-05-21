import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavotites} = useMovieContext()
    const favorite = isFavorite(movie.id)    

    function onFav(e) {
        e.preventDefault()

        if (favorite) removeFromFavotites(movie.id)
        else addToFavorites(movie)
    }

    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={movie.title} className="movie-poster"/>
            <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite? "active" : ""}`} onClick={onFav}>
                            ♥︎
                        </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );

}
export default MovieCard