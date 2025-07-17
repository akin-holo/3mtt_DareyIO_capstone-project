import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import "../styles/Watchlist.css"

const Watchlist = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      
      const fetchWatchlist = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/users/watchlist`, {
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
      fetchWatchlist();
   }, []);

   const handleRemove = async (movieId) => {
      try {
         const res = await axios.delete(`${import.meta.env.VITE_API_BASE}/api/users/watchlist/${movieId}`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
         });
         setMovies(res.data); // updated list
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div className="watchlist-page">
      <h2>📌 Your Watchlist</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map(movie => (
              <div key={movie.id} className="watchlist-item">
                <MovieCard movie={movie} />
                <button onClick={() => handleRemove(movie.id)}>🗑️ Remove</button>
              </div>
            ))
          ) : (
            <p>No movies saved yet. Go explore!</p>
          )}
        </div>
      )}
    </div>
   );
};

export default Watchlist;



