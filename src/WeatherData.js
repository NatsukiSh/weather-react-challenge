import React from "react";
import Format from "./Format";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="overview">
          <div className="col-md-5 d-flex justify-content start aligb-items-center">
            <h1 className="text-left">{props.weather.city}</h1>
            <Format date={props.weather.date} />
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center text-center">
            <Temperature celcius={props.weather.temperature} />
          </div>
          <ul>
            <li>
              Last updated:<span>{props.weather.date}</span>
            </li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature">
              <img alt="icon" src={props.weather.icon} />
              <div>
                <strong>{Math.round(props.weather.temperature)}</strong>
                <span>°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.weather.humidity}%</li>
              <li>Wind: {props.weather.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-3 d-flex-direction-column justify-content-start align-items-center">
          <div className="weather-forecast">
            <p className="info text-capitalize">{props.weather.description}</p>
            <img
              src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
              alt={props.weather.description}
              width="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
