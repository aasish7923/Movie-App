import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';

function Favs(){
    const {favorites} = useMovieContext();

if(favorites !== null){
    return(
        <div className="p-8 width-full box-border">
            <h2 className='mb-8 text-center text-[2.5rem] text-white text-shadow-[]'>Your Favorites</h2>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border">
                {favorites.map(
                (movie) => 
                (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    )
}

    return(<>
            <div className="text-center text-white py-16 px-8 rounded-3 mx-auto my-8 max-w-250 bg-[rgba(255, 255, 255, 0.05)]">
                <h2 className='mb-4 text-3xl text-[#e50914]'>This is where your favorites will appear.</h2>
                <p className='text-[#999] text-2xl '>Add Movies to Favorites.</p>
            </div>
    </>);
    

}
export default Favs