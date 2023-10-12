import React, { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm.js";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);
  useEffect(() => {
    const API_KEY = "17f9876b329c464abd4110138231102";
    const CITY = `${searchTerm}`;
  }, [searchTerm]);

  return (
    <div className="container">
      <SearchForm onChange={onChange} value={searchTerm} />
    </div>
  );
}

export default App;
