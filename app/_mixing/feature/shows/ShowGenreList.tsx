import CardsLoading from "../../ui/state/CardsLoading"
import TopRatedInGenre from "./TopRatedInGenre"
import {  useShowsGenre } from "./useShowGenre"

function ShowGenreList() {
    const {isLoading,genres}=useShowsGenre()
    if(isLoading){ return genres.map(genre=><CardsLoading  key={genre.id}   />)}
  return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
           {genres.map(genre=><TopRatedInGenre  key={genre.id}  genre={genre} />)}
        </div>
    )
}

export default ShowGenreList
