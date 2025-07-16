import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/movieService";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const Home = () => {
   const [movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchTrending = async () => {
         setLoading(true);
         const data = await getTrendingMovies();
         console.log('TMDB response:', data); // 👀 inspect here
         setMovies(data?.results || []);
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