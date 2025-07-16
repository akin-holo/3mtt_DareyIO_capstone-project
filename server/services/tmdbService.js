import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
   const { data } = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
   return data.results;
};

export const searchMovies = async (query) => {
   const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
   return data.results;
};