import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import LocationInfo from "./LocationInfo";

const STORM = 12;

function Map({ eventData, center, zoom }) {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === STORM) {
      return (
        <Marker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              url: ev.sources[0].url,
            })
          }
        />
      );
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCfCF-Lo2Es0JSVF0yQa-4IVBSkrKgIc_4" }}
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={() => setLocationInfo(null)}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfo info={locationInfo} />}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: -1.281174,
    lng: 102.537002,
  },
  zoom: 5,
};

export default Map;
