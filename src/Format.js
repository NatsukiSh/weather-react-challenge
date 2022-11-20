import React from "react";

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
    <>
      {day} {hours}:{minutes}
    </>
  );
}
