import { getMovieById, getMovieCredits, getMovieReviews, getMoviesGenres, getMustWatchMovies, getPlayingNowMovies, getPopularMoviesInGenre, getTopRatedMoviesInGenre, getUpcomingMovies } from "../../services/moviesApi";
import {  MovieCreditsResponse, MovieDetails, MovieListResponse, MovieReviewsResponse } from "../../../_@types/moviesTypes";
import { GenreListResponse } from "../../../_@types/types";

export function useMovieGenre(){

    const {data,isLoading,error}=useQuery<GenreListResponse>({
        queryKey:["movieGenre"],
        queryFn:getMoviesGenres
    })
    return {genres:data?.genres??[],isLoading,error}
}

export function useTopRatedMoviesInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["topRatedMoviesInGenre",id,page],
        queryFn:()=> getTopRatedMoviesInGenre(id,page),
        enabled:!!id,   
        
    })
    return {topRated:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function usePopularMoviesInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["popularMoviesInGenre",id,page],
        queryFn:()=> getPopularMoviesInGenre(id,page),
        enabled:!!id,   
    })
    return {popular:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}

export function useMustWatchMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["mustWatchMovies",page],
        queryFn:()=> getMustWatchMovies(page),
        enabled:!!page,   
    })
    return {mustWatch:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function useUpcomingMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["upcomingMovies",page],
        queryFn:()=> getUpcomingMovies(page),
        enabled:!!page,   
    })
    return {upcoming:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function usePlayingNowMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["playingNowMovies",page],
        queryFn:()=> getPlayingNowMovies(page),
        enabled:!!page,   
    })
    return {playingNow:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function useMovieById(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<MovieDetails>({
        queryKey:["movieById",id],
        queryFn:()=> getMovieById(id),
        enabled:!!id,   
    })
    
    return {movie:data,isLoading,error,isError} 
}
export function useMovieCredits(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<MovieCreditsResponse>({
        queryKey:["movieCredits",id],
        queryFn:()=> getMovieCredits(id),
        enabled:!!id,   
    })
    
    return {cast:data?.cast,crew:data?.crew,isLoading,error,isError} 
}
export function useMovieReviews(id:string|undefined){
   
    const {data,isLoading,error,isError}=useQuery<MovieReviewsResponse>({
        queryKey:["movieReviews",id],
        queryFn:()=> getMovieReviews(id),
        enabled:!!id,   
    })
    
    return {reviews:data?.results||[],isLoading,error,isError} 
}
