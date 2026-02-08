import { useQuery } from "@tanstack/react-query";
import { GenreListResponse } from "../../../_@types/types";
import { getMustWatchShows, getPlayingNowShows, getPopularShowsInGenre, getShowById, getShowCredits, getShowReviews, getShowsGenres, getTopRatedShowsInGenre, getUpcomingShows } from "../../services/showsApi";
import { ShowCreditsResponse, ShowDetails, ShowListResponse, ShowReviewsResponse } from "../../../_@types/showsTypes";

export function useShowsGenre(){

    const {data,isLoading,error}=useQuery<GenreListResponse>({
        queryKey:["showsGenre"],
        queryFn:getShowsGenres
    })
    return {genres:data?.genres??[],isLoading,error}
}

export function useTopRatedShowsInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<ShowListResponse>({
        queryKey:["topRatedShowsInGenre",id,page],
        queryFn:()=> getTopRatedShowsInGenre(id,page),
        enabled:!!id,   
        
    })
    return {topRated:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function usePopularShowsInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<ShowListResponse>({
        queryKey:["popularShowsInGenre",id,page],
        queryFn:()=> getPopularShowsInGenre(id,page),
        enabled:!!id,   
    })
    return {popular:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}

export function useMustWatchShows(page:number){
    const {data,isLoading,error,isError}=useQuery<ShowListResponse>({
        queryKey:["mustWatchShows",page],
        queryFn:()=> getMustWatchShows(page),
        enabled:!!page,   
    })
    return {mustWatch:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function useUpcomingShows(page:number){
    const {data,isLoading,error,isError}=useQuery<ShowListResponse>({
        queryKey:["upcomingShows",page],
        queryFn:()=> getUpcomingShows(page),
        enabled:!!page,   
    })
    return {upcoming:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function usePlayingNowShows(page:number){
    const {data,isLoading,error,isError}=useQuery<ShowListResponse>({
        queryKey:["playingNowShows",page],
        queryFn:()=> getPlayingNowShows(page),
        enabled:!!page,   
    })
    return {playingNow:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function useShowById(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<ShowDetails>({
        queryKey:["showById",id],
        queryFn:()=> getShowById(id),
        enabled:!!id,   
    })
    
    return {shows:data,isLoading,error,isError} 
}
export function useShowCredits(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<ShowCreditsResponse>({
        queryKey:["showCredits",id],
        queryFn:()=> getShowCredits(id),
        enabled:!!id,   
    })
    
    return {cast:data?.cast,crew:data?.crew,isLoading,error,isError} 
}
export function useShowReviews(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<ShowReviewsResponse>({
        queryKey:["showReviews",id],
        queryFn:()=> getShowReviews(id),
        enabled:!!id,   
    })
    
    return {reviews:data?.results||[],isLoading,error,isError} 
}
