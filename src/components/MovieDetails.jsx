import { useState, useEffect, useContext } from "react";
import { getMovieDetails } from "../services/api";
import { useParams } from "react-router-dom";
import Tickets from "./Tickets";
import { TicketContext } from "../contexts/TicketContext";
import TicketSection from "./Tickets";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const time_mins = movie?.runtime % 60 || 0;
  const time_hours = Math.floor((movie?.runtime || 0) / 60);
  const time_str = `${time_hours > 0 ? `${time_hours}h ` : ""}${time_mins}m`;

  const theatreMovies = useContext(TicketContext) || [];

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      try {
        const movie = await getMovieDetails(id);
        setMovie(movie);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie.");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      loadMovie();
    }
  }, [id]);

  if (loading) {
    return <div className="p-4">Loading movie details...</div>;
  }
  if (!movie) {
    return <div className="p-4">No movie data found.</div>;
  }


    const isInTheatre = theatreMovies.includes(movie.id);
    


  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 mt-10 justify-self-center">
        {movie.title || "Movie Details"}
      </h1>

      <div className="flex flex-row ml-5 gap-6 max-md:flex-col max-md:ml-0">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="max-w-100 mb-4 rounded"
        />

        <div className="flex flex-col justify-around gap-4 max-w-3xl">
          <div className="mb-4 text-white">{movie.overview}</div>

          <div className="text-xl text-gray-300  flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Genre:</p>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </div>
          <div className="text-xl text-gray-300 flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Rating:</p> {movie.vote_average}{" "}
            /10 ({movie.vote_count} votes)
          </div>

          <div className="text-xl text-gray-300 flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Production Company:</p>{" "}
            {movie.production_companies?.[0]?.name}
          </div>
          <div className="text-xl text-gray-300  flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Release Date:</p>{" "}
            {movie.release_date}
          </div>
          <div className="text-xl text-gray-300 flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Runtime:</p> {time_str}
          </div>

          <div className="text-xl text-gray-300 flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Country:</p>{" "}
            {movie.production_countries?.[0]?.name}
          </div>
          <div className="text-xl text-gray-300 flex items-center gap-8 flex-row">
            <p className="font-bold text-white">Language:</p>{" "}
            {movie.original_language.toUpperCase()}
          </div>
        </div>
      </div>

          {/* showtime, ticket buying deadline */}
          {isInTheatre && <TicketSection movie={movie} />}

    </div>
  );
}

export default MovieDetails;
