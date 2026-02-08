import {  useNavigate, useParams, useSearchParams } from "react-router"
import { moviesGenres } from "../services/premadeData";
import { useTopRatedMoviesInGenre } from "../feature/movies/useMovieGenre";
import {  useEffect, useState } from "react";
import toast from "react-hot-toast";
import MovieCard from "../ui/shared/MovieCard";
import Pagination from "../ui/shared/Pagination";


function ListPage({isMovie}:{isMovie:boolean}) {
  const navigate=useNavigate()
  const [searchParam]=useSearchParams();
  const param=useParams();
  searchParam.set("page",searchParam.get("page")||"1")
  if(Number(searchParam.get("page"))>500){
    toast.error("page cant be over 500")
  }
  const [page, setPage] =useState<number>(Number(searchParam.get("page")));
  
  const genre=moviesGenres.genres.find(g=>g.name===param.id);
  const {topRated,isLoading,total_pages,error,isError}=useTopRatedMoviesInGenre(genre?.id,page)
 
    function handlePageChang(page:number){
        if(!genre) return toast.error("error fetching genre");
        if(page<1||page>=total_pages||page>500)return toast.error("page cant be over 500 or less than 1")
        searchParam.set("page",String(page));
        setPage(page);
        navigate(`/${isMovie?"movies":"shows"}/${genre.name}?${searchParam.toString()}`)
    }
    useEffect(
      ()=>{
        if(isError)toast.error(`Error ${error?.message}`)
      }
      ,[isError,error])
    
    if(!genre) return <span>Genre not found</span>
    if(isLoading) return <span>Loading...</span>
    if(error) return<span>{error.name}</span>;
    return (
        <section className="mt-4">
        <p className="text-2xl md:text-4xl font-bold">
          Explore our wide variety of categories
        </p>
        <p className="text-subtitle mt-2">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
        <div className="flex flex-wrap md:gap-8 gap-1.5 justify-center mt-2.5">
           {topRated.map(movie=>  <MovieCard
          movie={movie}
          key={movie.id}
          >
            <MovieCard.Title/>
            {window.innerWidth>=480&&<MovieCard.Vote/>}
          </MovieCard>)}
          </div>
            <Pagination currentPage={page} totalPages={total_pages<500?total_pages:500} onPageChange={handlePageChang}  />
            
          </section>
    )
}

export default ListPage
