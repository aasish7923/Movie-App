import '../css/Favs.css'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';

function Favs(){
    const {favorites} = useMovieContext();

if(favorites){
    return(
        <div className="favorites">
            <h2>Your Favorites</h2>
        <div className="movies-grid">
                {favorites.map(
                (movie) => 
                (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    )
}

    return(<>
            <div className="favorites-empty">
                <h2>This is where your favorites will appear.</h2>
                <p>Add Movies to Favorites.</p>
            </div>
    </>);
    

}
export default Favs