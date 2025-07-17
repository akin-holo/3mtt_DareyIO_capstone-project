import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/users/favorites`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setFavorites(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const handleRemove = async (movieId) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE}/api/users/favorites/${movieId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setFavorites(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="favorites-page">
      <h2>❤️ Your Favorite Movies</h2>

      {loading ? (
        <p>Loading favorites...</p>
      ) : (
        <div className="movie-grid">
          {favorites.length > 0 ? (
            favorites.map(movie => (
              <div key={movie.id} className="favorite-item">
                <MovieCard movie={movie} />
                <button onClick={() => handleRemove(movie.id)}>Remove ❤️</button>
              </div>
            ))
          ) : (
            <p>No favorites saved yet. Show your love!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
