import React, { useState } from "react";
import Format from "./Format";
import axios from "axios";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaltCity);

  function handleCity(response) {
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

  function handleSubmit(event) {
    event.preventDefalt();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleCity);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="weather-app-wrapper">
              <div className="weather-app">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="search"
                        placefolder="Type a city..."
                        className="searchInput"
                        autoFocus="on"
                        onChange={updateCity}
                      />
                    </div>
                    <div className="col-3">
                      <input
                        type="submit"
                        value="Search"
                        onClick={handleCity}
                      />{" "}
                      <Format />
                    </div>
                  </div>
                </form>
                <div className="overview">
                  <h1 className="text-left">{props.city}</h1>
                  <ul>
                    <li>
                      Last updated:<span>{props.date}</span>
                    </li>
                    <li>{weather.description}</li>
                  </ul>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="weather-temperature">
                      <img alt="icon" src={weather.icon} />
                      <div>
                        <strong>{Math.round(weather.temperature)}</strong>
                        <span>°C</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li>Humidity: {weather.humidity}%</li>
                      <li>Wind: {weather.wind}km/h</li>
                    </ul>
                  </div>
                </div>
                <div className="weather-forecast">
                  <Forecast />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Searching...";
  }
}
