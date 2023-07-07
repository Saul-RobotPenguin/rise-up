import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";

import LocationPin from "./LocationPin";
import "./Map.css";

export default function Map({ lat, lng, locations }) {
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    console.log(locations);
    setMarkers(locations);
  }, [locations]);

  return (
    <>
      <div className="map">
        <h2 className="map-h2">
          Locations being shown, you may need to zoom out!
        </h2>
        {console.log(markers)}
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GMAPSAPI_KEY,
            }}
            defaultCenter={{ lat: lat, lng: lng }}
            defaultZoom={19}
          >
            {markers.map(
              (mark, id) => (
                console.log(mark),
                (<LocationPin id={id} lat={mark.lat} lng={mark.lon} />)
              )
            )}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
