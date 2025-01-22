import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex md:justify-around overflow-x-auto">
        <div className="flex md:grid md:grid-cols-8 md:gap-4 pr-4 md:pr-0">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
