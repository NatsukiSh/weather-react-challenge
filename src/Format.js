import React from "react";
import "./Format.css";

export default function Format(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = days[props.date.getHours()];
  if (hours < 10) {
    hours = `0&{hours}`;
  }
  let minutes = days[props.date.getMinutes()];
  if (minutes < 10) {
    minutes = `0&{minutes}`;
  }

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
