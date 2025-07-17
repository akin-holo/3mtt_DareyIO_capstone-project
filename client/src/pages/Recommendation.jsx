import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import "../styles/Recommendations.css"

const Recommendations = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/users/recommendations`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setMovies(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchRecommendations();
  }, []);

  return (
    <div className="recommendations-page">
      <h2>🧠 Recommended For You</h2>
      {loading ? (
        <p>Loading suggestions...</p>
      ) : (
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <p>No recommendations yet. Add some favorites!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recommendations;
