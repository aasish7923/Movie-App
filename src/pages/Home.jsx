import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      }
    };

    loadPopularMovies();
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

      <div
      className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
      >
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
