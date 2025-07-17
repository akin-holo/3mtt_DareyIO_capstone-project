import User from '../models/User.js';
import axios from 'axios';

// 🗂️ Watchlist Controllers

export const addToWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movie = req.body;

    // Optional: check for duplicates
    const exists = user.watchlist.find(m => m.id === movie.id);
    if (exists) return res.status(400).json({ message: 'Already in watchlist' });

    user.watchlist.push(movie);
    await user.save();
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movieId = req.params.id;

    user.watchlist = user.watchlist.filter(m => m.id !== movieId);
    await user.save();
    res.json(user.watchlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// ⭐ Favorites Controllers

export const addToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movie = req.body;

    const exists = user.favorites.find(m => m.id === movie.id);
    if (exists) return res.status(400).json({ message: 'Already in favorites' });

    user.favorites.push(movie);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const movieId = req.params.id;

    user.favorites = user.favorites.filter(m => m.id !== movieId);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

      // recommendation
export const getRecommendations = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const allGenres = user.favorites.flatMap(movie => movie.genre_ids || []);
    const topGenres = [...new Set(allGenres)].slice(0, 3); // pick top 3

    const promises = topGenres.map(gid =>
      axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${gid}`)
    );

    const responses = await Promise.all(promises);
    const movies = responses.flatMap(r => r.data.results.slice(0, 5)); // trim results

    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

