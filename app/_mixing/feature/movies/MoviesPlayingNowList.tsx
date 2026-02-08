import { usePlayingNowMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";
import CardLoading from "../../ui/state/CardLoading";

function MoviesPlayingNowList() {
  const { playingNow, isLoading } = usePlayingNowMovies(1);
  if (isLoading) return <CardLoading />;

  return (
    <div className="flex overflow-x-auto space-x-4 mt-10">
      {playingNow.map((movie) => (
        <MovieCard className="min-w-[295px]" key={movie.id} movie={movie}>
          <MovieCard.Title />
          <MovieCard.Vote />
        </MovieCard>
      ))}
    </div>
  );
}

export default MoviesPlayingNowList;
