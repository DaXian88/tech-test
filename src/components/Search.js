import react, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  //   const [submit, setSubmit] = use
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

export default Search;
