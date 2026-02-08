import { ShowCreditsResponse, ShowDetails, ShowListResponse, ShowReviewsResponse } from "../../_@types/showsTypes";
import { GenreListResponse } from "../../_@types/types";
import {  showsGenres } from "./premadeData";
import { apiToken, apiUrl } from "./tmdb";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${apiToken}`,
};

export async function getShowsGenres(): Promise<GenreListResponse> {
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
  const data: GenreListResponse = showsGenres;
  return data;
}

export async function getPopularShowsInGenre(
  id: number | undefined,
  page = 1
): Promise<ShowListResponse> {
  const url = `${apiUrl}discover/tv?with_genres=${id}&sort_by=vote_average.desc&&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getTopRatedShowsInGenre(
  id: number | undefined,
  page = 1
): Promise<ShowListResponse> {
  if (!id) throw new Error("Genre ID is required");
  const url = `${apiUrl}discover/tv?with_genres=${id}&sort_by=popularity.desc&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getMustWatchShows(
  page = 1
): Promise<ShowListResponse> {
  const url = `${apiUrl}tv/top_rated?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getUpcomingShows(
  page = 1
): Promise<ShowListResponse> {
  const url = `${apiUrl}tv/on_the_air?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getPlayingNowShows(
  page = 1
): Promise<ShowListResponse> {
  const url = `${apiUrl}tv/airing_today?language=en-US&page${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
}

export async function getShowById(
  id:string|undefined
): Promise<ShowDetails> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}tv/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowDetails = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    throw error;
  }
}
export async function getShowCredits(
  id:string|undefined
): Promise<ShowCreditsResponse> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}/tv/${id}/credits`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowCreditsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}
export async function getShowReviews(
  id:string|undefined
): Promise<ShowReviewsResponse> {
   if(id==undefined)throw new Error("there is no movie selected")
  const url = `${apiUrl}/tv/${id}/reviews?page=1`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowReviewsResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}
export async function getShowBySearch(
  query:string
): Promise<ShowListResponse> {
  if(query.length<=3) return {page:0,results:[],total_pages:0,total_results:0}
  const url = `${apiUrl}search/tv?query=${encodeURIComponent(query)}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ShowListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie credits:", error);
    throw error;
  }
}

