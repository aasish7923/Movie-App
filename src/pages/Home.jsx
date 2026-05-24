import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies, getTrendingMovies, getTopRatedMovies, getNowPlayingMovies} from "../services/api";

function Home() {
  const slice = 6;

  const [searchQuery, setSearchQuery] = useState("");

  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]); 
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setPopularMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      }
    };
    const loadTopRatedMovies = async () => {
      try {
        const topRatedMovies = await getTopRatedMovies();
        setTopRatedMovies(topRatedMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      }
    };
    const loadNowPlayingMovies = async () => {
      try {
        const nowPlayingMovies = await getNowPlayingMovies();
        setNowPlayingMovies(nowPlayingMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      }
    };
    const loadTrendingMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      }
    };

    loadPopularMovies();
    loadTopRatedMovies();
    loadNowPlayingMovies();
    loadTrendingMovies(); 
  }, []);




  const handleSearch = async (e) => {
    e.preventDefault(); //prevents the search bar from clearing
    if (!searchQuery.trim()) return;

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies..");
    }
  };


  if(error){
    return(
      <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
        <h2 className="text-red-500 text-center text-lg">{error}</h2>
      </div>
    )
  }
  // if (movies.length === 0) {
  //   return (
  //     <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
  //       <p className="text-center text-gray-500 mt-8">Loading movies...</p>
  //     </div>
  //   );
  // }

  return (


    <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
      <form
        className=" mb-8 max-w-150 flex gap-4 px-4  justify-self-center max-sm:mb-4"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="py-3 px-4 border-none rounded bg-[#333] text-base text-white focus: outline-none focus:ring-2 focus:ring-[#666]"

          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" 
        className="py-3 px-4 bg-[#e50914] text-white rounded-1 font-bold transition-[background-color] duration-300 ease-in-out hover:bg-[#f40612]"
        >
          Search
        </button>
      </form>



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
  );
}
export default Home;
