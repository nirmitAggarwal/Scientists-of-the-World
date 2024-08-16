// components/Search.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a scientist..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-600 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
