import {  useUpcomingShows } from "./useShowGenre";
import ShowCard from "../../ui/shared/ShowCard";
import CardLoading from "../../ui/state/CardLoading";


function ShowsUpcomingList() {
  const {upcoming,isLoading}=useUpcomingShows(1);
if(isLoading)return <CardLoading />;

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {upcoming.map(show=><ShowCard
    className="min-w-[295px]"
        key={show.id}
          show={show}
        >
          <ShowCard.ReleaseDate/>
        </ShowCard> )}
      </div>   
}



export default ShowsUpcomingList
