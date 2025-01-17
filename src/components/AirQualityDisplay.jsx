import React from "react";

function AirQualityDisplay({ aqi, status }) {
  return (
    <div className="air-quality-box">
      <h2>AQI: {aqi}</h2>
      <p>Status: {status}</p>
    </div>
  );
}

export default AirQualityDisplay;
