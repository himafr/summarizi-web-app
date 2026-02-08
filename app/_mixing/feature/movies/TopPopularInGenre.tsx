import { useNavigate } from "react-router";
import { Genre } from "../../../_@types/types";
import { imageUrl } from "../../services/tmdb";
import PrimaryButton from "../../ui/shared/PrimaryButton";
import { usePopularMoviesInGenre } from "./useMovieGenre";
import CardsLoading from "../../ui/state/CardsLoading";


function TopPopularInGenre({genre}:{genre:Genre}) {
  const {popular,isLoading}=usePopularMoviesInGenre(genre.id,1);
  const navigate =useNavigate();
  function handleNavigate(){
   navigate(`/movies/rated/${genre.name}`)
  }
if(isLoading)return <CardsLoading />
  return (
    <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] border border-border rounded-[10px]">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative " >
        {popular.slice(0,4).map(movie=><img
        key={movie.id}
          className="w-[115.2px] h-[123.5px] object-cover cursor-pointer"
          src={imageUrl+movie.poster_path}
          onClick={()=>navigate(`/movies/movie/${movie.id}`)}

          alt={movie.title}
        />)}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] pointer-events-none"></div>
      </div>
{top&&<PrimaryButton title="Top 10 in" className="h-8 py-0 items-center cursor-pointer" onClick={handleNavigate} />}
      <div className="flex justify-between relative top-2 items-center">
        <p className="text-[18px] font-semibold cursor-pointer  hover:text-primary " onClick={handleNavigate}>{genre.name}</p>
        <img src="svg/arrow-right.svg" width={30} alt="icon" className="cursor-pointer" onClick={handleNavigate} />
      </div>
    </div>
  );
}

export default TopPopularInGenre;
