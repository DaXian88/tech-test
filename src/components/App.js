import "../styles/App.css";
import Search from "./Search";
import { useState } from "react";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa Logo"
      ></img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
};

export default App;
