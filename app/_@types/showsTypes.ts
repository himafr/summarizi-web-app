import { AuthorDetails, CastMember, CrewMember } from "./types";

export interface Show  {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
};

export interface ShowListResponse  {
  page: number;
  results: Show[];
  total_pages: number;
  total_results: number;
};

export interface Season{
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }
export interface ShowDetails {
  adult: boolean;
  backdrop_path: string | null;
  created_by: any[]; // You can replace this with a specific interface if you want to type creators
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
  } | null;
  name: string;
  next_episode_to_air: unknown; // If you want to type this, it will resemble `last_episode_to_air`
  networks: any[]; // You can refine this as needed
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: any[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  seasons: Season[];
  spoken_languages: string[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ShowCreditsResponse {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface ShowReview {
author: string;
    author_details:AuthorDetails;
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
};

export interface ShowReviewsResponse {
  id: number;
  page: number;
  results: ShowReview[];
  total_pages: number;
  total_results: number;
}
