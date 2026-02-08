import { imageUrl } from "../../services/tmdb"
import {  MovieReview } from "../../../_@types/moviesTypes"
import BoxRate from "./BoxRate"

function ReviewComponent({review}:{review:MovieReview}) {
  const {author_details,content,updated_at,created_at ,url}=review
    return (
        <div className="bg-black06  p-[30px] rounded-xl shadow-md max-w-xl min-w-[300px] md:min-w-[370px] border border-border">
                <div className="text-xl font-semibold mb-4">
                <div className="flex gap-2.5 mb-2.5">
                                    <img className="w-12 h-[50px] object-cover rounded-[6px]" src={imageUrl+author_details.avatar_path} alt={author_details.name} />
                                  <div> 
                                    {author_details.name||"Unknown"}
                                    <div className="text-subtitle text-xs mt-2.5">{new Date(updated_at||created_at).toDateString()} </div>
                                    </div>

                                </div>
                                <BoxRate stars={author_details.rating||0}/>
                </div>
                <p className="text-subtitle">
                  “{content.slice(0,500)}...”
                </p>
<a href={url} target="_blank" className="text-blue-500 mt-6"> Go To the Review Page</a>
              </div>
    )
}

export default ReviewComponent
