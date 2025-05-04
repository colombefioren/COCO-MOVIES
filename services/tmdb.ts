import { MovieItem } from "@/types/movieItem";

const apiKey = "502cef5b29443abbdb998c1f1610af11";
const baseUrl = "https://api.themoviedb.org/3";

const trendingMoviesEndpoint = `${baseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${apiKey}`;
const topMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${apiKey}`;
const findMovieByID = `${baseUrl}/movie/`;

export const image500 = (path: string | null): string | null =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : null;

export const imageOriginal = (path: string | null): string | null =>
  path ? `https://image.tmdb.org/t/p/original${path}` : null;

const apiCall = async (endPoint: string): Promise<MovieItem[]> => {
  try {
    const response = await fetch(endPoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("API call failed:", error);
    return [];
  }
};

export const fetchTrendingMovies = (): Promise<MovieItem[]> =>
  apiCall(trendingMoviesEndpoint);

export const fetchUpcomingMovies = (): Promise<MovieItem[]> =>
  apiCall(upcomingMoviesEndpoint);

export const fetchTopMovies = (): Promise<MovieItem[]> =>
  apiCall(topMoviesEndpoint);

export const fetchMovieByID = async (id: number) => {
  try {
    const response = await fetch(`${findMovieByID}${id}?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API call failed:", error);
    return [];
  }
};
