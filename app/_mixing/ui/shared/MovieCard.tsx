import { useNavigate } from "react-router";
import { imageUrl } from "../../services/tmdb";
import { Movie } from "../../../_@types/moviesTypes";
import { createContext, ReactNode, useContext } from "react";
import clsx from "clsx";
import BoxRate from "./BoxRate";

const MovieCardContext = createContext<Movie | undefined>(undefined);
function MovieCard({
  movie,
  children,
  className
}: {
  movie: Movie;
  children?: ReactNode;
  className?:string
}) {
  return (
    <MovieCardContext.Provider value={{ ...movie }}>
      <div className={clsx("w-[90px] md:w-[295.4px] md:p-[30px] p-1.5 py-3 bg-[#1A1A1A] md:min-w-[295px] min-w-[115px] rounded-[10px] border border-border",className)}>
        <MovieCard.Poster />
        <div className="flex flex-row justify-around relative top-2 items-center">
          {children}
        </div>
      </div>
    </MovieCardContext.Provider>
  );
}
function Poster() {
  const movie = useContext(MovieCardContext);
  if (!movie) throw new Error("MovieCardContext is undefined!");
  const { poster_path } = movie;
  const navigate = useNavigate();
  return (
    <div className="bg-linear-to-t relative ">
      <img
        className="object-cover rounded-xl border border-border cursor-pointer"
        src={imageUrl + poster_path}
        alt=""
        onClick={() => navigate(`/movies/movie/${movie.id}`)}
      />
    </div>
  );
}
function Vote() {
  const movie = useContext(MovieCardContext);
  if (!movie) throw new Error("MovieCardContext is undefined!");
  const { vote_count } = movie;

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
  const movie = useContext(MovieCardContext);
  if (!movie) throw new Error("MovieCardContext is undefined!");
  const { vote_average } = movie;

  return (
    <div className=" flex justify-between items-center bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl ">
      <div className="text-subtitle text-xs">
       <BoxRate stars={vote_average}/>
      </div>
    </div>
  );
}
function Title() {
  const movie=useContext(MovieCardContext)
      if (!movie) throw new Error("MovieCardContext is undefined!");
      const {title}=movie;
  return (
    <div className="  bg-black08  p-1  md:px-2 rounded-4xl">
      <div className="text-subtitle text-xs">{title}</div>
    </div>
  );
}
function ReleaseDate() {
  const movie=useContext(MovieCardContext)
      if (!movie) throw new Error("MovieCardContext is undefined!");
      const {release_date}=movie;
  return (
    <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
      <div className="text-subtitle text-xs flex gap-2.5 items-center">
        <img src="/svg/clock.svg" width={20} />
        {new Date(release_date).toDateString()}
      </div>
    </div>
  );
}
function Popularity() {
  const movie=useContext(MovieCardContext)
      if (!movie) throw new Error("MovieCardContext is undefined!");
      const {popularity}=movie;
  return (
    <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
      <img src="/svg/trend.svg" width={20} />
      <div className="text-subtitle text-xs">{popularity}</div>
    </div>
  );
}

MovieCard.Poster = Poster;
MovieCard.Title = Title;
MovieCard.ReleaseDate = ReleaseDate;
MovieCard.Popularity = Popularity;
MovieCard.Vote = Vote;
MovieCard.Rated = Rated;

export default MovieCard;
