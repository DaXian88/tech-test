import "../styles/App.css";
import Search from "./Search";
import { useState } from "react";
import SearchResults from "./SearchResults";
import PropTypes from "prop-types";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa Logo"
      />
      <Search setSearchResults={setSearchResults} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

// App.propTypes = {

// }

export default App;
