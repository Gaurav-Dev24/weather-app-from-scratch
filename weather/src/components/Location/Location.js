import React from "react";
import "./Location.css";

function Location({ weather }) {
    // handler function to build date
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}  ${date} ${month}  ${year}`;
  };

  return (
    <div className="location-and-date">
      <h1 className="location-and-date__location">
        {weather.name}, {weather.sys.country}
      </h1>
      <div>{dateBuilder(new Date())}</div>
    </div>
  );
}

export default Location;
