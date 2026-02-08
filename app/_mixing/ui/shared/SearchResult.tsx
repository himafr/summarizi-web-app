import { useRouter } from "next/navigation"
import { Movie } from "../../../_@types/moviesTypes"
import BadgeComponent from "./BadgeComponent"
import clsx from "clsx"
import { backDropUrl } from "@/app/services/tmdb"

const SearchResult : React.FC<{movie:Movie}> =({movie})=> {
    const navigate=useRouter()
    const {title,backdrop_path,overview,vote_average,id}=movie
    return (
        <div className="flex flex-row-reverse md:flex-row justify-around items-center relative pb-10 pt-[30px] gap-4 md:px-5 cursor-pointer hover:bg-hover" 
        onClick={()=>navigate.push("/movies/movie/"+id)}>
         <div className="absolute top-0 bg-gradient-to-r from-5% via-25% from-dark via-[#262626] to-dark h-[2px] w-full" />

            <div className="flex  flex-row gap-4">
                <div className="flex justify-around items-center">

                <img src={backDropUrl+backdrop_path}
                 className={clsx("w-[172px]  rounded-lg object-cover border border-border",!backdrop_path&&"max-w-[60px]")} alt={title?.slice(0,10)} />
                </div >
                <div>
                    <h3 className="font-semibold text-lg mt-2 block">{title}</h3>
                    <p className="text-subtitle mt-2 block">{window.innerWidth<450?overview?.slice(0,30): overview?.slice(0,100)}...</p>
                </div>
                <div className="hidden md:block">
                <BadgeComponent  children={
                    <div className="flex gap-2 text-sm text-subtitle ">
                        <img src="/svg/star.svg" className="w-6" />
                        {vote_average}

                    </div>
                }
                className="absolute right-0 w-fit border border-border"/>
                </div>

            </div>
            
        </div>

    )
}

export default SearchResult
