import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return <p>No results found</p>;
  } else {
    return (
      <div className="image-container">
        <p>Search Results</p>
        {searchResults.map((result) => (
          <img className="search-image" src={result} alt="Space Pic" />
        ))}
      </div>
    );
  }
};

export default SearchResults;
