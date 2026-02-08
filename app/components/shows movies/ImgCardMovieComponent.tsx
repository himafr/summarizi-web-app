import { imageUrl } from "../../services/tmdb";
import { Movie } from "../../_@types/moviesTypes";


function ImgCardMovieComponent({movie,}:{movie:Movie}) {
  const {poster_path,release_date} = movie;
   return (
    <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] rounded-[10px] border border-border">
      <div className="bg-linear-to-t relative ">
        <img
          className="object-cover rounded-xl border border-border"
          src={imageUrl+poster_path}
          alt=""
        />
      </div>
     {/* {category.name=="Trending"?
     <div className="flex justify-between relative top-2 items-center">
      <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl">
        <img src="svg/clock.svg" width={20}/>
            <div className="text-subtitle  text-xs">1h 30min {release_date}</div>
          </div>
      <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl">
        <img src="svg/eye.svg" width={20}/>
            <div className="text-subtitle text-xs">2K</div>
          </div>
      
      </div>:category.name=="Releases"?
     <div className="flex justify-center relative top-2 items-center ">
      <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
            <div className="text-subtitle text-xs">Released at 14 April 2023</div>
          </div>
      </div>: */}
     <div className="flex justify-between relative top-2 items-center">
        <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
        <img src="/svg/clock.svg" width={20}/>
            <div className="text-subtitle text-xs">{release_date}</div>
          </div>
      <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
        <img src="/svg/eye.svg" width={20}/>
            <div className="text-subtitle text-xs">2K</div>
          </div>

          </div>
      
    </div>
  );
}

export default ImgCardMovieComponent
