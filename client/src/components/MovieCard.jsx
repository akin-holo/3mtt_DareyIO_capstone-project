import { Link } from "react-router-dom";
import "../styles/MovieCard.css"
import "../styles/Responsive.css"

const Moviecard = ({ movie }) => {
   const imageBase = "https://image.tmdb.org/t/p/w500";
   

   return (
      <Link to={`/movie/${movie.id}`}>
         <div className="movie-card">
            <img src={`${imageBase}${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>⭐ {movie.vote_average}</p>
            <p>🗓️ {movie.release_date}</p>
         </div>
      </Link>  
   );
};

export default Moviecard;