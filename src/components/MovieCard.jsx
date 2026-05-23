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
        <div className="relative group rounded-lg overflow-hidden bg-[#1a1a1a] transition-transform duration-200 h-full flex flex-col hover:-translate-1.25 max-md:text-sm">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
             alt={movie.title} className="relative" />
            <div className="absolute inset-0 opacity-0  group-hover:opacity-100 bg-linear-to-b from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.8)] flex flex-col justify-end transition-opacity duration-200">
                        <button 
                        className={
                            `${favorite ? "text-red-500 absolute top-4 right-4 text-2xl p-2 bg-gray-900 rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-200 hover:bg-[rgba(0, 0, 0, 0.8)] max-md:w-8 max-md:h-8 max-md:text-xl " :
                                          "absolute top-4 right-4 text-white text-2xl p-2 bg-gray-900 rounded-full w-10 h-10 flex justify-center items-center transition-colors duration-200 hover:bg-[rgba(0, 0, 0, 0.8)]  max-md:w-8 max-md:h-8 max-md:text-xl  "}`}
                        onClick={onFav}
                        >
                            ♥︎
                        </button>
            </div>
            <div className="p-4 flex flex-1 flex-col gap-2 max-md:p-3">
                <h3 className='text-lg m-0'>{movie.title}</h3>
                <p className='text-[#999] text-3.5' >{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );

}
export default MovieCard