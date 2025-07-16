import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const getTrendingMovies = async () => {
   const res = await axios.get(`${API_BASE}/api/movies/trending`);
   return res.data;
};

export const searchMovies = async (query) => {
   const res = await axios.get(`${API_BASE}/api/movies/search?q=${query}`);
   return res.data;
}