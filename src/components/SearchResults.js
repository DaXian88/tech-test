import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults) {
    return <p>No results found</p>;
  } else {
    return (
      <>
        <p>Search Results</p>
        {searchResults.map((result) => (
          <img className="search-image" src={result} alt="Space Pic" />
        ))}
      </>
    );
  }
};

export default SearchResults;
