import React, { useEffect } from "react";
import L from "leaflet";  // ✅ Ensure this is correct
import "leaflet/dist/leaflet.css";  // ✅ Import Leaflet's CSS

function MapComponent({ onLocationSelect }) {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    let marker;
    map.on("click", (e) => {
      if (marker) {
        map.removeLayer(marker);
      }
      marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      onLocationSelect(e.latlng.lat.toFixed(4), e.latlng.lng.toFixed(4));
    });
  }, [onLocationSelect]);

  return <div id="map" style={{ height: "400px", width: "100%" }}></div>;
}

export default MapComponent;
