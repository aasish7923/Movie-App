import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import ShowSearchMovies from "../components/ShowSearchMovies";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) return;
      
      setLoading(true);
      try {
        const results = await searchMovies(query);
        setSearchResults(results);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies..");
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [query]);

  if (error) {
    return (
      <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
        <h2 className="text-red-500 text-center text-lg">{error}</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
        <p className="text-center text-gray-500 mt-8">Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="p-8 w-full max-sm:py-4 max-sm:px-0">
      {searchResults.length > 0 ? (
        <ShowSearchMovies searchResults={searchResults} searchQuery={query} />
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p>No movies found for "{query}"</p>
        </div>
      )}
    </div>
  );
}

export default Search
