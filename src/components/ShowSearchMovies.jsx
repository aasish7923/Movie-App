import MovieCard from "./MovieCard";

function ShowSearchMovies({ searchResults, searchQuery }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 mt-10 pl-4">Search Results for "{searchQuery}"</h1>
      <div
        className="grid grid-rows-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
      >
        <div
        className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 p-4 width-full box-border"
        >
          {searchResults.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default ShowSearchMovies