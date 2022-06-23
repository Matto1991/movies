import React from "react";

const Searchbar = ({ setQuery }) => {
  return (
    <div className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search movie"
        aria-label="Search"
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
};

export default Searchbar;
