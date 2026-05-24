import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, getTrendingMovies,
  getTopRatedMovies, getNowPlayingMovies} from "../services/api";
import ShowHomeIntro from "../components/ShowHomeIntro";
import { useNavigate } from "react-router-dom";

function Home() {
  const slice = 6;
  const navigate = useNavigate();

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
    e.preventDefault();
    if (!searchQuery.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  if(error){
    return(
      <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
        <h2 className="text-red-500 text-center text-lg">{error}</h2>
      </div>
    )
  }

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

      <ShowHomeIntro slice={slice} popularMovies={popularMovies} topRatedMovies={topRatedMovies} nowPlayingMovies={nowPlayingMovies} trendingMovies={trendingMovies} /> 
    </div>
  );
}
export default Home;
