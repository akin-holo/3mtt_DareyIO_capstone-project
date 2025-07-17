import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
   const imageBase = "https://image.tmbd.org/t/p/w500";
   

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