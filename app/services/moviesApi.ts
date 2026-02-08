import {   MovieCreditsResponse, MovieDetails, MovieListResponse, MovieReviewsResponse } from "../../_@types/moviesTypes";
import { GenreListResponse } from "../../_@types/types";
import { moviesGenres } from "./premadeData";
import { apiToken, apiUrl } from "./tmdb";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${apiToken}`,
};

export async function getMoviesGenres(): Promise<GenreListResponse> {
  //using the api
  // const url = `${apiUrl}genre/movie/list?language=en`;

  // const options = {
  //   method: 'GET',
  //   headers
  // };

  // try {
  //   const response = await fetch(url, options);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data: GenreListResponse = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error('Failed to fetch movie genres:', error);
  //   throw error;
  // }
  //data
  const data: GenreListResponse = moviesGenres;
  return data;
}

export async function getPopularMoviesInGenre(
  id: number | undefined,
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}discover/movie?with_genres=${id}&sort_by=vote_average.desc&&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getTopRatedMoviesInGenre(
  id: number | undefined,
  page = 1
): Promise<MovieListResponse> {
  if (!id) throw new Error("Genre ID is required");
  const url = `${apiUrl}discover/movie?with_genres=${id}&sort_by=popularity.desc&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getMustWatchMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/top_rated?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getUpcomingMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/upcoming?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getPlayingNowMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/now_playing?language=en-US&page${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}

export async function getMovieById(
  id:string|undefined
): Promise<MovieDetails> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieDetails = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    throw error;
  }
}
export async function getMovieCredits(
  id:string|undefined
): Promise<MovieCreditsResponse> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}/movie/${id}/credits`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieCreditsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}
export async function getMovieReviews(
  id:string|undefined
): Promise<MovieReviewsResponse> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}/movie/${id}/reviews?page=1`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieReviewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}
export async function getMovieBySearch(
  query:string
): Promise<MovieListResponse> {
  if(query.length<=3) return {page:0,results:[],total_pages:0,total_results:0}
  const url = `${apiUrl}search/movie?query=${encodeURIComponent(query)}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}

