import { backDropUrl } from "../../services/tmdb"
import { Season } from "../../_@types/showsTypes"
import BadgeComponent from "../../_mixing/ui/shared/BadgeComponent"

function EpisodeComponent({season,epNum}:{season:Season,epNum:number}) {
    return (
        <div className="flex flex-row-reverse md:flex-row justify-around items-center relative pb-10 pt-[30px] gap-4 px-5 md:px-0 ">
         <div className="absolute top-0 bg-gradient-to-r from-5% via-25% from-dark via-[#262626] to-dark h-[2px] w-full" />

            <div className="font-semibold text-2xl text-subtitle hidden md:block " >{epNum>=10?epNum:"0"+epNum}</div>
            <div className="flex  flex-col md:flex-row gap-4">
                <div className="flex justify-around items-center">

                <img src={backDropUrl+season.poster_path} className="min-w-[172px] rounded-lg object-cover border border-border h-[110px]" />
            <div className="font-semibold text-2xl text-subtitle md:hidden" >01</div>
                </div >
                <div>
                    <h3 className="font-semibold text-lg mt-2 hidden md:block">{season.season_number} : {season.name}</h3>
                    <p className="text-subtitle mt-5 hidden md:block">{season.overview||"no overview"}</p>
                </div>
                <BadgeComponent  children={
                    <div className="flex gap-2 text-sm text-subtitle ">
                        <img src="/svg/star.svg" className="w-6" />
                        {season.vote_average}

                    </div>
                } className="md:absolute right-0 w-fit border border-border"/>
                    <h3 className="font-semibold text-lg mt-2 md:hidden block">{season.name} : {season.overview.slice(0,100)}</h3>

            </div>
            
        </div>
    )
}

export default EpisodeComponent
