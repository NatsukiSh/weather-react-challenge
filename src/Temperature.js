import React from "react";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h1 className="temp">
        {Math.round(props.celcius)}
        <small>°C</small>
      </h1>
    </div>
  );
}
