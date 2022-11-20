import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleCity(event) {
    event.preventDefault();
    let apiKey = "28feed74ca8e6f8450fa975c80fe27e3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    setWeather({
      name: response.data.main.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    setLoaded(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form>
      <input
        type="search"
        placefolder="Type a city..."
        autoFocus
        onChange={updateCity}
      />
      <input type="submit" value="Search" onClick={handleCity} />{" "}
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img alt="icon" src={weather.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
