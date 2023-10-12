import React from "react";
import "./SearchForm.css";

const SearchForm = ({searchTerm, onChange}) => {
  

  return (
    <form onsubmit="getData(event)" className="searchData">
      <input
        id="inputBox"
        type="text"
        placeholder="Enter the city name"
        onChange={onChange}
        value={searchTerm}
      />
      {/* {console.log(inputBox)} */}
      {/* <button>Search</button> */}
    </form>
  );
};

export default SearchForm;
