import { useNavigate } from "react-router";
import { useTopRatedMoviesInGenre } from "../_mixing/feature/movies/useMovieGenre";
import { imageUrl } from "../services/tmdb";
import { Genre,  } from "../_@types/types";
import PrimaryButton from "../_mixing/ui/shared/PrimaryButton";


function MultiImgCardComponent({genre}: {genre:Genre}) {
  const {topRated,isLoading}=useTopRatedMoviesInGenre(genre.id,1);
  const navigate =useNavigate();
if(isLoading)return <p>loading...</p>
  return (
    <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] border border-border rounded-[10px]">
      <div className="grid gap-1.5 grid-cols-2  bg-linear-to-t relative ">
        {topRated.slice(0,4).map(movie=><img
          className="w-[115.2px] h-[123.5px] object-cover"
          src={imageUrl+movie.poster_path}
          alt=""
        />)}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] pointer-events-none"></div>
      </div>
{top&&<PrimaryButton title="Top 10 in" className="h-8 py-0 items-center" />}
      <div className="flex justify-between relative top-2 items-center">
        <p className="text-[18px] font-semibold">{genre.name}</p>
        <img src="svg/arrow-right.svg" width={30} alt="icon" className="cursor-pointer" onClick={()=>navigate(`/movies/${genre.name}`)}/>
      </div>
    </div>
  );
}

export default MultiImgCardComponent;
