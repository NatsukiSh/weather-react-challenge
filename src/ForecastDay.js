import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <WeatherIcon
        icon={props.data.weather[0].icon}
        size={50}
        className="icon"
      />
      <div className="forecast-temperatures">
        <div className="forecast-temperature-max">{maxTemperature()}</div>
        <div className="forecast-temperature-min">{minTemperature()}</div>
      </div>
    </div>
  );
}
