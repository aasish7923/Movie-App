import React, { useEffect } from "react";
import { getTrendingMovies } from "../services/api";
import MovieCard from "./MovieCard";

function WeeklyTrendingMovies() {
    const [trendingMovies, setTTrendingMovies] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [error, setError] = React.useState(null);
    const slice = 12;
    useEffect(() => {
        const loadTrendingMovies = async () => {
          try {
            const trendingMovies = await getTrendingMovies(page);
            setTTrendingMovies(trendingMovies);
          } catch (err) {
            console.log(err);
            setError("Failed to load movies..");
          }
        };
        loadTrendingMovies();
    }, [page]);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Weekly Trending Movies</h1>
      <div
        className="grid grid-rows-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
      >
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {trendingMovies.slice(0, slice).map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 mb-10">
          {[1,2,3,4,5,6].map((p) => (
            <button
            className={`px-3 py-1 rounded ${p === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
            key={p}
            onClick={() => setPage(p)}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeeklyTrendingMovies