import { useState } from "react"

const SearchBar = ({ onSearch }) => {
   const [query, setQuery] = useState("");

   const handleSunmit = e => {
      e.preventDefault();
      onSearch(query);
   };

   return (
      <form onSubmit={handleSunmit} className="search-bar">
         <input 
            type="text"
            placeholder="Search for a movie..."
            onChange={e => setQuery(e.target.value)}
         />

         <button type="submit">🔍</button>
      </form>
   )
}

export default SearchBar