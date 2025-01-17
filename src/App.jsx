import React, { useState } from "react";
import LocationInput from "./components/LocationInput";
import AirQualityDisplay from "./components/AirQualityDisplay";
import MapComponent from "./components/MapComponent";
import "./App.css";

function App() {
  const [aqi, setAqi] = useState(null);
  const [status, setStatus] = useState("");

  const fetchAirQuality = async (lat, lon) => {
    const apiKey = "cdb1393ff2cf2a2d6be727819bb574e0";
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // ✅ Correcting the typo
      const aqiValue = data.list[0].main.aqi;

      let statusText = "";
      switch (aqiValue) {
        case 1:
          statusText = "Good";
          break;
        case 2:
          statusText = "Moderate";
          break;
        case 3:
          statusText = "Unhealthy for Sensitive Groups";
          break;
        case 4:
          statusText = "Unhealthy";
          break;
        case 5:
          statusText = "Very Unhealthy";
          break;
        default:
          statusText = "Hazardous";
      }

      setAqi(aqiValue);
      setStatus(statusText);
    } catch (error) {
      console.error("Error fetching AQI:", error);
    }
  };

  return (
    <div className="App">
      <h1>Air Quality Index Tracker</h1>
      <LocationInput onSearch={fetchAirQuality} />
      <AirQualityDisplay aqi={aqi} status={status} />
      <MapComponent onLocationSelect={fetchAirQuality} />
    </div>
  );
}

export default App;
