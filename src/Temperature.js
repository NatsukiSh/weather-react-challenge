import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <h2 className="temp">
        {Math.round(props.celcius)}
        <small>°C</small>
      </h2>
    </div>
  );
}
