import { useNavigate } from "react-router";
import { imageUrl } from "../../services/tmdb";
import { createContext, ReactNode, useContext } from "react";
import clsx from "clsx";
import BoxRate from "./BoxRate";
import { Show } from "../../../_@types/showsTypes";

const ShowCardContext = createContext<Show | undefined>(undefined);
function ShowCard({
  show,
  children,
  className
}: {
  show: Show;
  children?: ReactNode;
  className?:string
}) {
  return (
    <ShowCardContext.Provider value={{ ...show }}>
      <div className={clsx("w-[90px] md:w-[295.4px] md:p-[30px] p-1.5 py-3 bg-[#1A1A1A] md:min-w-[295px] min-w-[115px] rounded-[10px] border border-border",className)}>
        <ShowCard.Poster />
        <div className="flex flex-row justify-around relative top-2 items-center">
          {children}
        </div>
      </div>
    </ShowCardContext.Provider>
  );
}
function Poster() {
  const show = useContext(ShowCardContext);
  if (!show) throw new Error("ShowCardContext is undefined!");
  const { poster_path } = show;
  const navigate = useNavigate();
  return (
    <div className="bg-linear-to-t relative ">
      <img
        className="object-cover rounded-xl border border-border cursor-pointer"
        src={imageUrl + poster_path}
        alt=""
        onClick={() => navigate(`/shows/show/${show.id}`)}
      />
    </div>
  );
}
function Vote() {
  const show = useContext(ShowCardContext);
  if (!show) throw new Error("ShowCardContext is undefined!");
  const { vote_count } = show;

  return (
    <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl">
      <div className="text-subtitle text-xs">
        {vote_count < 1000
          ? vote_count
          : (vote_count / 1000).toFixed(1) + " k"}
      </div>
      <img src="/svg/vote.svg" width={20} />
    </div>
  );
}
function Rated() {
  const show = useContext(ShowCardContext);
  if (!show) throw new Error("ShowCardContext is undefined!");
  const { vote_average } = show;

  return (
    <div className=" flex justify-between items-center bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl ">
      <div className="text-subtitle text-xs">
       <BoxRate stars={vote_average}/>
      </div>
    </div>
  );
}
function Title() {
  const show=useContext(ShowCardContext)
      if (!show) throw new Error("ShowCardContext is undefined!");
      const {name}=show;
  return (
    <div className="  bg-black08  p-1  md:px-2 rounded-4xl">
      <div className="text-subtitle text-xs">{name}</div>
    </div>
  );
}
function ReleaseDate() {
  const show=useContext(ShowCardContext)
      if (!show) throw new Error("ShowCardContext is undefined!");
      const {first_air_date}=show;
  return (
    <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
      <div className="text-subtitle text-xs flex gap-2.5 items-center">
        <img src="/svg/clock.svg" width={20} />
        {new Date(first_air_date).toDateString()}
      </div>
    </div>
  );
}
function Popularity() {
  const show=useContext(ShowCardContext)
      if (!show) throw new Error("ShowCardContext is undefined!");
      const {popularity}=show;
  return (
    <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
      <img src="/svg/trend.svg" width={20} />
      <div className="text-subtitle text-xs">{popularity}</div>
    </div>
  );
}

ShowCard.Poster = Poster;
ShowCard.Title = Title;
ShowCard.ReleaseDate = ReleaseDate;
ShowCard.Popularity = Popularity;
ShowCard.Vote = Vote;
ShowCard.Rated = Rated;

export default ShowCard;
