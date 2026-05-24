import MovieCard from "../components/MovieCard"; 

function ShowHomeIntro({ slice, popularMovies, topRatedMovies, nowPlayingMovies, trendingMovies }) {
    return (
        <div>
        <div className="flex justify-between items-center">
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


        <div className="flex justify-between items-center">
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


        <div className="flex justify-between items-center">
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


        <div className="flex justify-between items-center">
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

          </div>
    )
}

export default ShowHomeIntro