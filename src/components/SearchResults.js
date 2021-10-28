import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

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

SearchResults.propTypes = {
  searchResults: PropTypes.func.isRequired,
};

export default SearchResults;
