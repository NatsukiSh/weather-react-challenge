import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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
      icon: response.data.weather[0].icon,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="searchForm">
          <div className="row">
            <form onSubmit={handleSubmit}>
              <div className="col-6">
                <input
                  type="search"
                  placefolder="Type a city..."
                  className="searchInput"
                  autoFocus
                  onChange={updateCity}
                />
              </div>
              <div className="col-6">
                <input
                  type="submit"
                  value="Search"
                  className="search-button btn btn-primary"
                />
                <span>
                  <input
                    type="button"
                    value="Current"
                    className="current-button btn
                  btn-success"
                  />
                </span>
              </div>
            </form>
          </div>
        </div>
        <WeatherData data={weather} />
        <Forecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Searching...🔍";
  }
}
