import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return <p>No results found</p>;
  } else {
    return (
      <div className="search-results">
        {searchResults.map((result) => (
          <img className="search-image" src={result} alt="Space Pic" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
