import React, { useState } from "react";
import Format from "./Format";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaltCity);

  function handleSubmit(event) {
    event.preventDefalt();
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form>
          <input
            type="search"
            placefolder="Type a city..."
            className="searchInput"
            autoFocus
            onChange={updateCity}
          />
          <input type="submit" value="Search" onClick={handleSubmit} />
        </form>
        <Format />

        <Forecast />
      </div>
    );
  } else {
    return "Searching...🔍";
  }
}
