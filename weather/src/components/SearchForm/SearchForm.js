import React from "react";
import "./SearchForm.css";


const SearchForm = ({search, query, onChange}) => {
  return (
    <div className="search-box">
          <input
            className="search-bar"
            type="text"
            placeholder="Search your city"
            onChange={onChange}
            value={query}
            onKeyPress={search}
          />
        </div>
  );
};

export default SearchForm;
