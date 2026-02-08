import {  useUpcomingMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";
import CardLoading from "../../ui/state/CardLoading";


function MoviesUpcomingList() {
  const {upcoming,isLoading}=useUpcomingMovies(1);
if(isLoading)return <CardLoading />;

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {upcoming.map(movie=><MovieCard
    className="min-w-[295px]"
        key={movie.id}
          movie={movie}
        >
          <MovieCard.ReleaseDate/>
        </MovieCard> )}
      </div>   
}



export default MoviesUpcomingList
