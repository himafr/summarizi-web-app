import HeaderComponent from "../ui/shared/HeaderComponent";
import PrimaryButton from "../ui/shared/PrimaryButton";
import { useState } from "react";
import IconBorder from "../ui/shared/IconBorder";
import FreeTrail from "../ui/shared/FreeTrail";
import { useNavigate } from "react-router";
import FooterComponent from "../ui/shared/FooterComponent";
import ShowGenreList from "../feature/shows/ShowGenreList";
import MoviesPopularList from "../feature/shows/ShowsPopularList";
import ShowsMustWatchList from "../feature/shows/ShowsMustWatchList";
import ShowsUpcomingList from "../feature/shows/ShowsUpcomingList";
import ShowsPlayingNowList from "../feature/shows/ShowsPlayingNowList";
import { usePlayingNowShows } from "../feature/shows/useShowGenre";
import { backDropUrl } from "../services/tmdb";

function ShowsPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [overview, setOverview] = useState<number>(
    Math.floor(Math.random() * 20)
  );
  const navigate = useNavigate();
  const { playingNow, isLoading } = usePlayingNowShows(1);

  function handleChange(i: number) {
    if (i + overview > 19 || i + overview < 0) return;
    setOverview((prev) => prev + i);
  }

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px]">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />

      <div className="w-full h-screen relative mt-7">
        <img
          src={
            isLoading
              ? "images/movies.jpeg"
              : backDropUrl + playingNow[overview].backdrop_path
          }
          className="  w-screen h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark  to-black/15   px-2 md:px-12 h-full ">
          <section className=" flex flex-col   text-center  h-full justify-end">
            <p className="text-3xl md:text-5xl font-bold mb-5">
              {playingNow[overview]?.name}
            </p>
            <p className="text-subtitle mt-2 mb-10 hidden md:block">
              {playingNow[overview]?.overview}
            </p>

            <div className="flex flex-col  md:flex-row justify-center gap-3 items-center">
              <PrimaryButton
              onClick={() => navigate("/shows/movie/"+playingNow[overview].id)}
                className="items-center h-12 cursor-pointer "
                icon={
                  <img
                    className="my-3 "
                    width={24}
                    src="svg/play.svg"
                    alt="sh"
                  />
                }
                title="Play Now"
              />
              <div className="flex gap-3  ">
                <IconBorder src="svg/plus.svg" />
                <IconBorder src="svg/like.svg" />
                <IconBorder src="svg/audio.svg" />
              </div>
            </div>
            <div className="w-full  justify-between items-end my-5  hidden md:flex">
              <div onClick={() => handleChange(-1)}>
                <IconBorder src="svg/left-arrow.svg" />
              </div>
              <div className="flex gap-1.5">
                {playingNow.map((_, index) =>
                  index == overview ? (
                    <div
                      key={index}
                      className="w-5 h-1.5 bg-primary cursor-pointer"
                      onClick={() => setOverview(index)}
                    ></div>
                  ) : (
                    <div
                      key={index}
                      className="w-5 h-1.5 bg-gray-500 cursor-pointer"
                      onClick={() => setOverview(index)}
                    ></div>
                  )
                )}
              </div>
              <div onClick={() => handleChange(1)}>
                <IconBorder src="svg/right-arrow.svg" />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* movies */}

      {/* Our Genres */}

      <section className="mt-[15vh]" id="movies_genres">
        <PrimaryButton
          title="Movies"
          className="mb-5"
          onClick={() => {
            navigate("movie/12");
          }}
        />
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Our Genres</p>
        </div>
        <ShowGenreList />
      </section>

      {/* Popular Top 10 In Genres */}
      <section className="mt-[10vh]" id="movies_popular">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">
            Popular Top 10 In Genres
          </p>
        </div>
        <MoviesPopularList />
      </section>

      {/* Playing Now */}

      <section className="mt-[10vh]" id="movies_playing">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Playing Now</p>
        </div>
        <ShowsPlayingNowList />
      </section>

      {/* Upcoming  movies */}
      <section className="mt-[10vh]" id="movies_release">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Upcoming Movies</p>
        </div>
        <ShowsUpcomingList />
      </section>

      {/* Must - Watch Movies */}
      <section className="mt-[10vh]" id="movies_watch">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Must - Watch Movies</p>
        </div>
        <ShowsMustWatchList />
      </section>
      <FreeTrail />

      <FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />
    </div>
  );
}

export default ShowsPage;
