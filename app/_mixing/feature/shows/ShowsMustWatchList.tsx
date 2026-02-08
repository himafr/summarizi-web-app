import {  useMustWatchShows } from "./useShowGenre";
import ShowCard from "../../ui/shared/ShowCard";
import CardLoading from "../../ui/state/CardLoading";


function ShowsMustWatchList() {
  const {mustWatch,isLoading}=useMustWatchShows(1);
if(isLoading)return <CardLoading/>;

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {mustWatch.map(show=><ShowCard
    className="min-w-[295px]"
        key={show.id}
          show={show}
        >
          <ShowCard.Popularity/>
          <ShowCard.Rated/>
        </ShowCard> )}
      </div>   
}

export default ShowsMustWatchList;
