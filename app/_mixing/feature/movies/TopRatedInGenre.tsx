import { Genre } from "../../../_@types/types";
import { useTopRatedMoviesInGenre } from "./useMovieGenre";
import CardsLoading from "../../ui/state/CardsLoading";
import { useRouter } from "next/navigation";
import { imageUrl } from "@/app/services/tmdb";


function TopRatedInGenre({genre}:{genre:Genre}) {
  const {topRated,isLoading}=useTopRatedMoviesInGenre(genre.id,1);
  const navigate =useRouter();

  function handleNavigate(){
  navigate.push(`/movies/${genre.name}`)
  }
if(isLoading)return <CardsLoading/>;
  return (
    <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] border border-border rounded-[10px]">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative ">
        {topRated.slice(0,4).map(movie=><img
        key={movie.id}
          className="w-[115.2px] h-[123.5px] object-cover cursor-pointer"
          src={imageUrl+movie.poster_path}
          onClick={()=>navigate.push(`/movies/movie/${movie.id}`)}
          alt={movie.title}
        />)}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] pointer-events-none"></div>
      </div>
      <div className="flex justify-between relative top-2 items-center">
        <p className="text-[18px] font-semibold cursor-pointer hover:text-primary" onClick={handleNavigate}>{genre.name}</p>
        <img src="svg/arrow-right.svg" width={30} alt="icon" className="cursor-pointer" onClick={handleNavigate}/>
      </div>
    </div>
  );
}

export default TopRatedInGenre;
