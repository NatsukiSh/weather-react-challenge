import React from "react";
import Format from "./Format";
import Temperature from "./Temperature";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="overview">
          <h1 className="text-left">{props.data.city}</h1>
          <Format date={props.data.date} />
        </div>
        <div className="col-md-4">
          <Temperature celcius={props.data.temperature} />
        </div>
        <ul>
          <li>
            Last updated:<span>{props.data.date}</span>
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt="Clear"
            />
            {props.data.icon}
            <div>
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="weather-temperature-unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="col-3">
        <div className="weather-forecast">
          <p className="info text-capitalize">{props.data.description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt={props.data.description}
            width="100px"
          />
        </div>
      </div>
    </div>
  );
}
