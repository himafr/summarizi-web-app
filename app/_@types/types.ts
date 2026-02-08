export interface QuestionTypes {
  id: number;
  q: string;
  answer: string;
}
export interface PlanTypes {

  time?: string;

  name: string;
  highlight?: boolean;
  price: string;
  content: string;
  devices?: string;
  trial?: string;
  cancel?: string;
  hdr?: string;
  dolby?: string;
  ads?: string;
  offline?: string;
  family?: string;
};

export interface DeviceTypes {
  name: string;
  description: string;
  icon: string;
}

export enum Category {
    Genres = "genres",
    Popular = "popular",
    Trending = "trending",
    Releases = "releases",
    Watch = "watch",
}
export enum ShowType {
    Movie="movie",
    Show="show",
}
export interface CardType{
    category:Category;
    type?:ShowType;
}


// Reference the enum in the interface
export interface MoviesTypes {
    img:string;
}
    export interface ShowsTypes {
        img:string;
    }

export  interface Genre {
  id: number;
  name: string;
}

export interface GenreListResponse {
  genres: Genre[];
}
 


export interface PersonDetails  {
  adult: boolean; // Defaults to true
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string;
  gender: number; // Defaults to 0
  homepage: string;
  id: number; // Defaults to 0
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number; // Defaults to 0
  profile_path: string;
};

export interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}
export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string | null;
  rating: number | null;
}