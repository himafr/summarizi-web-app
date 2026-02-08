import { useMustWatchMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";
import CardLoading from "../../ui/state/CardLoading";


function MoviesMustWatchList() {
  const {mustWatch,isLoading}=useMustWatchMovies(1);
if(isLoading)return <CardLoading/>;

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {mustWatch.map(movie=><MovieCard
    className="min-w-[295px]"
        key={movie.id}
          movie={movie}
        >
          <MovieCard.Popularity/>
          <MovieCard.Rated/>
        </MovieCard> )}
      </div>   
}

export default MoviesMustWatchList;
