import { useState } from "react";
import PrimaryButton from "../ui/shared/PrimaryButton";
import HeaderComponent from "../ui/shared/HeaderComponent";
import IconBorder from "../ui/shared/IconBorder";
import ReviewComponent from "../ui/shared/ReviewComponent";
import BadgeComponent from "../ui/shared/BadgeComponent";
import FreeTrail from "../ui/shared/FreeTrail";
import FooterComponent from "../ui/shared/FooterComponent";
import { useNavigate, useParams } from "react-router";
import { useMovieById, useMovieCredits, useMovieReviews } from "../feature/movies/useMovieGenre";
import { backDropUrl, imageUrl } from "../services/tmdb";
import clsx from "clsx";
import BoxRate from "../ui/shared/BoxRate";
import LoadingPage from "../ui/state/LoadingPage";

function MoviePage() {
  const navigate=useNavigate()
  const {id}=useParams<{id:string}>()
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const {movie,isError:movieIsError,isLoading:movieIsLoading,error:movieError}=useMovieById(id)
  const {cast,crew,isError:creditsIsError,isLoading:creditsLoading}=useMovieCredits(id);
  const {reviews}=useMovieReviews(id)
const isLoading=movieIsLoading||creditsLoading;
const isError=movieIsError||creditsIsError;

if(isLoading)return <LoadingPage />

  if(isError||!movie)return<span>Error :{movieError?.message}</span>
  if(!crew||!cast)return<span>Error :{movieError?.message}</span>
  const {backdrop_path,overview,original_title,release_date,spoken_languages,genres,vote_average}=movie

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px]">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />

      <div className="w-full h-screen relative mt-7">
        <img
          src={backDropUrl+backdrop_path}
          className="  w-screen h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark  to-black/15   px-2 md:px-12 h-full ">
          <section className=" flex flex-col   text-center  h-full justify-end">
            <p className="text-3xl md:text-5xl font-bold mb-5">
             {original_title}
            </p>
            <p className="text-subtitle mt-2 mb-10 hidden md:block">
              {overview}
               </p>

            <div className="flex flex-col  md:flex-row justify-center gap-3 items-center">
              <PrimaryButton
                className="items-center h-12 "
                icon={
                  <img
                    className="my-3 "
                    width={24}
                    src="/svg/play.svg"
                    alt="sh"
                  />
                }
                title="Play Now"
              />
              <div className="flex gap-3  ">
                <IconBorder src="/svg/plus.svg" />
                <IconBorder src="/svg/like.svg" />
                <IconBorder src="/svg/audio.svg" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="block md:flex gap-5  py-10 items-start ">
        <div className="md:w-[70%]">
          {/* description */}
          <div className="p-10 bg-black10 rounded-[10px] mb-5">
            <div className="text-subtitle mb-5">description</div>{overview}
          </div>

          {/* Cast */}
          <div className="p-2 md:p-10 bg-black10 rounded-[10px] mb-5">
            <div className="text-subtitle mb-5">Cast</div>
            <div className="flex overflow-x-auto space-x-4">
              {cast.map(actor => ( <img 
              
                    onClick={()=>navigate(`/person/${actor.id}`)}

              title={actor.name}
                  key={actor.cast_id}
                  src={imageUrl+actor.profile_path}
                  className={clsx("aspect-square bg-gray-700 rounded-lg  min-w-20 cursor-pointer",isLoading&&"animate-pulse")}
                />
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="p-2 md:p-10 bg-black10 rounded-[10px] mb-8">
            <div className="flex justify-between mb-5">
              <div className="text-subtitle ">Reviews</div>
              {/* <BadgeComponent children={
                <div className="flex gap-2.5 text-sm items-center">
                  <img src="/svg/plus.svg" className="w-6"/>
                  Add Your Review
                </div>
              } /> */}
            </div>
            <div className="flex overflow-x-auto space-x-4 ">
{reviews.map(review=><ReviewComponent review={review} key={review.id} />
 )}
             
            </div>
          </div>
        </div>

        {/* Wrapper Grid */}
        <div className=" flex flex-col gap-6 p-2 md:p-10 bg-black10 rounded-[10px]">
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Released Year</div>
            <div>{new Date(release_date).getFullYear()}</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/language.svg" className="w-5 " alt="" />Language</div>
            <div className="flex flex-wrap gap-2.5">
              {spoken_languages.map(language=><BadgeComponent key={language.english_name} className="text-sm" children={language.english_name} />  )}
             
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/star.svg" className="w-5 " alt="" />Rating</div>
            <BadgeComponent
              children={
                <div className="flex flex-col gap-2.5">
                 <BoxRate stars={vote_average} h={18} />
                  Vote Average : {vote_average.toFixed(1)}
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/category.svg" className="w-5 " alt="" /> Genres</div>
            <div className="flex flex-wrap gap-2.5">
              {genres.map(genre=><BadgeComponent className="text-sm " key={genre.id} children={genre.name}  />)}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Director</div>
            {crew.map(person=>person.job=="Director"&& <BadgeComponent
            key={person.id}
            children={
              <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px] cursor-pointer" 
                    onClick={()=>navigate(`/person/${person.id}`)}
                    src={imageUrl+person.profile_path} alt={person.name} />
                  <div> 
                    {person.name}
                    <div className="text-subtitle">Department {person.department}</div>
                    </div>
                </div>
              }
              />
            )}
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Music</div>
            {crew.map(person=>person.job=='Original Music Composer'&&<BadgeComponent
            key={person.id}
            children={
              <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px] cursor-pointer" 
                    onClick={()=>navigate(`/person/${person.id}`)}
                    src={imageUrl+person.profile_path} alt={person.name}/>
                  <div> 
                    {person.name}
                    <div className="text-subtitle">Department {person.department}</div>
                    </div>
                </div>
              }
              />
            )}
          </div>
        </div>
      </section>

    <FreeTrail />
<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />

    </div>
  );
}

export default MoviePage;
