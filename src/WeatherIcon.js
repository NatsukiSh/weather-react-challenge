import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import propTypes from "prop-types";

export default class WeatherIcon extends Component() {
  static propTypes = {
    icon: propTypes.oneOf([
      `CLEAR_DAY`,
      `CLEAR_NIGHT`,
      `PARTLY_CLOUDY_DAY`,
      `PARTLY_CLOUDY_NIGHT`,
      `CLOUDY`,
      `RAIN`,
      `SLEET`,
      `SNOW`,
      `WIND`,
      `FOG`,
    ]).isRequired,
    animate: propTypes.bool,
    size: propTypes.number,
    color: propTypes.string,
  };

  return() {
    <ReactAnimatedWeather animate={true} size={16} color="#444343" />;
  }
}
