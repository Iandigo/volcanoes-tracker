import React from "react";

function LocationInfo({ info }) {
  return (
    <div className="location-info">
      <h2>Location info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          LOCATION: <strong>{info.title}</strong>
        </li>
        <li>
          URL: <strong>{info.url}</strong>
        </li>
      </ul>
    </div>
  );
}

export default LocationInfo;
