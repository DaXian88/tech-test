import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Search;
