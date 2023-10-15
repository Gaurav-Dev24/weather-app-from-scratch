import React, { useState}  from "react";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm.js";
import Location from "./components/Location/Location.js";

const api = {
  key: "e85513136b184765269337dec3919a25",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const onChange = (e) => setQuery(e.target.value);

  // handler function to search the city name
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          // setQuery("");
          console.log(result);
        });
    }
  };
 

  return (
    <main className="container">
      <SearchForm search={search} query={query} onChange={onChange} />
      <Location weather={weather} />
    </main>
  );
}

export default App;
