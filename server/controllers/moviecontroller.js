import { fetchTrendingMovies, searchMovies } from "../services/tmdbService.js";

export const getTrending = async (req, res) => {
   try {
      const movies = await fetchTrendingMovies();
      res.json(movies);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};

export const searchMoviesByQuery = async (req, res) => {
   try {
      const { q } = req.query;
      const movies = await searchMovies(q);
      res.json(movies);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};

export const getMovieDetails = async (req, res) => {
   try {
      const id = req.params.id;
      const { data } = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      res.json(data);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
};
