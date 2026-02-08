import {  usePlayingNowShows } from "./useShowGenre";
import ShowCard from "../../ui/shared/ShowCard";
import CardLoading from "../../ui/state/CardLoading";

function ShowsPlayingNowList() {
  const { playingNow, isLoading } = usePlayingNowShows(1);
  if (isLoading) return <CardLoading />;

  return (
    <div className="flex overflow-x-auto space-x-4 mt-10">
      {playingNow.map((show) => (
        <ShowCard className="min-w-[295px]" key={show.id} show={show}>
          <ShowCard.Title />
          <ShowCard.Vote />
        </ShowCard>
      ))}
    </div>
  );
}

export default ShowsPlayingNowList;
