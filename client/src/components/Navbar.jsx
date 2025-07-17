import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import "../styles/Responsive.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🎬 MovieVerse</h2>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/login">Login</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/recommendations">Recommendations</Link>
      </div>
    </nav>
  );
};

export default Navbar;
