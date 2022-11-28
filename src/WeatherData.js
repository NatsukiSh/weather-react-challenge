import React from "react";
import Format from "./Format";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <div className="row">
        <div className="overview">
          <h2 className="col-4 mt-3">{props.data.city}</h2>
        </div>
        <ul className="col-4">
          <li>
            <span>
              <Format date={props.data.date} />
            </span>
          </li>
          <li className="description">{props.data.description}</li>
        </ul>
        <div className="col-md-4">
          <Temperature celcius={props.data.temperature} />
        </div>
      </div>
      <div className="row">
        <div className="col-6" id="icon">
          <div className="weather-temperature">
            <WeatherIcon icon={props.data.icon} size={50} />
          </div>
        </div>
        <div className="col-6" id="details">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}
