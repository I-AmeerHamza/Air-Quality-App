import React, { useState } from "react";

function LocationInput({ onSearch }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSearch = () => {
    if (latitude && longitude) {
      onSearch(latitude, longitude);
    } else {
      alert("Please enter valid coordinates!");
    }
  };

  return (
    <div className="location-container">
      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default LocationInput;
