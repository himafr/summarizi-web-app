import {  useState } from "react";
import SearchResult from "./SearchResult";
import { useMovieBySearch, useShowBySearch } from "../../hooks/useSearch";
import SearchResultShow from "./SearchResultShows";

const Search: React.FC = () => {
  const [filter, setFilter] = useState("movie");
  const [query, setQuery] = useState("");
  const { movies, error, isLoading } = useMovieBySearch(
    filter == "movie" ? query : ""
  );

  const {
    shows,
    error: showError,
    isLoading: ShowIsLoading,
  } = useShowBySearch(filter == "show" ? query : "");


  return (
    <div className="flex justify-center items-center md:w-3xl min-w-[100vw] md:min-w-auto">
      <div className="md:px-4 px-1.5 text-gray-600 dark:text-gray-300 outline-none focus:outline-none">
        <div className="relative flex w-full mb-2.5">
          <select
            value={filter}
            onChange={(e) => {
              setQuery(query+" ")
              setFilter(e.target.value)
            }}
            className="bg-white dark:bg-gray-800 h-10 md:px-5 rounded-l-full text-sm focus:outline-none outline-none border-2 border-gray-500 dark:border-gray-600 border-r-1 cursor-pointer max-h-10 overflow-y-hidden"
          >
            <option className="font-medium cursor-pointer" value="movie">
              Movies
            </option>
            <option className="font-medium cursor-pointer" value="show">
              Shows
            </option>
          </select>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            name="search"
            placeholder="Search"
            className="bg-white dark:bg-gray-800 h-10 min-w-[9rem] flex px-5 w-full rounded-r-full text-sm focus:outline-none border-2 border-l-0 border-gray-500 dark:border-gray-600 pr-10"
            required
            step="any"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 mr-2 flex items-center px-2"
          >
            <svg
              className="h-4 w-4 fill-current dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="h-[70vh] overflow-auto ">
          {(isLoading || ShowIsLoading)&& <span>Loading...</span>}
          {(!error ||showError) && <span>{error?.message || showError?.message}</span>}

          {movies?.map((movie) => (
            <SearchResult key={movie.id} movie={movie} />
          ))}

          {shows?.map((show) => (
            <SearchResultShow key={show.id} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
