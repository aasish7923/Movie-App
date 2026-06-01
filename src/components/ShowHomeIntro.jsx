import MovieCard from "../components/MovieCard";


function ShowHomeIntro({ slice, popularMovies, topRatedMovies, nowPlayingMovies,
  trendingMovies, theatreMovies }) {
    return (
        <div>
        <div className="flex justify-between items-center" id="popular">
        <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Popular Movies</h1>
        <a href="/popular-movies" className="text-blue-500 hover:text-blue-700 pr-4">
          Explore more ➙
        </a>
        </div>
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {popularMovies.slice(0, slice).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>


        <div className="flex justify-between items-center" id="toprated">
        <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Top Rated Movies</h1>
        <a href="/top-rated-movies" className="text-blue-500 hover:text-blue-700 pr-4">
          Explore more ➙
        </a>
        </div>
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {topRatedMovies.slice(0, slice).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>


        <div className="flex justify-between items-center" id="nowplaying">
        <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Now Playing Movies</h1>
        <a href="/now-playing-movies" className="text-blue-500 hover:text-blue-700 pr-4">
          Explore more ➙
        </a>
        </div>
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {nowPlayingMovies.slice(0, slice).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>  


        <div className="flex justify-between items-center" id="weeklytrending">
        <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Weekly Trending Movies</h1>
        <a href="/trending-movies" className="text-blue-500 hover:text-blue-700 pr-4 ">
          Explore more ➙
        </a>
        </div>
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {trendingMovies.slice(0, slice).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>


        <div className="flex justify-between items-center" id="theatres">
        <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">In Theaters</h1>
        </div>
        
        {theatreMovies.length > 0 ? 
          < div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border">
                  {theatreMovies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                  ))}
          </div>
            :
          <p className="text-center text-2xl text-gray-500 my-30">No movies currently in theaters.</p>

        }

          </div>
    )
}

export default ShowHomeIntro