import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchMovie = async () => {
         try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASE}/api/movie/details/${id}`);
            setMovie(res.data);
            setLoading(false);
         } catch (err) {
            console.error(err);
            setLoading(false);
         }
      };
      fetchMovie();
   }, [id]);

   if (loading) return <p>Loading details...</p>
   if (!movie) return <p>Movie not found</p>

   const imageBase = "https://image.tmbd.org/t/p/w500";

   const handleAddToWatchlist = async () => {
      try {
         await axios.post(`${import.meta.env.VITE_API_BASE}/api/users/watchlist`, movie, {
            headers: {  Authorization: `Bearer ${userToken}`}
         })
         alert("Added to watchlist");
      } catch (err) {
         alert("Error adding movie");
      }
   };

   return ( 
      <div className="movie-details">
         <img src={`${imageBase}${movie.poster_path}`} alt={movie.title} />
         <p>{movie.overview}</p>
         <p>⭐ {movie.vote_average}</p>
         <p>🗓️ {movie.release_date}</p>
         <p>🎭 Genres: {movie.genres?.map(g => g.name).join(', ')}</p>

         <button onClick={handleAddToWatchlist}>
            ➕ Add to Watchlist
         </button>
      </div>
    );
};
 
export default MovieDetails
