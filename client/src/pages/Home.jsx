import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/movieService";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import '../styles/MovieCard.css';


const Home = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchTrending = async () => {
         setLoading(true);
   
         try {
            const data = await getTrendingMovies();
            console.log('🎬 TMDB response:', data);
            setMovies(data || []);
         } catch (err) {
            console.error('❌ Error fetching movies:', err.message);
         }
         setLoading(false);
      };
      fetchTrending();
   }, []);

   const handleSearch = async (query) => {
      if (!query) return;
      setLoading(true);
      const data = await searchMovies(query);
      setMovies(data);
      setLoading(false);
   }

   return (
      <div className="home-container">
         <SearchBar onSearch={handleSearch} />

         {loading && <p>Loading movies...</p>}

          <div className="movie-grid">
            {movies.map((movie) => (
               <MovieCard key={movie.id} movie={movie} />
            ))}
         </div>
      </div>
     
   );
};

export default Home;