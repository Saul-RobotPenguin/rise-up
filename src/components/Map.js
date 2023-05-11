import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { wifiLocations, getDirections } from "../services/public-data";
import GoogleMapReact from "google-map-react";

import LocationPin from "./LocationPin";
import "./Map.css";

export default function Map({ zoomLevel, lat, lng }) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await wifiLocations();
      console.log(response.data);
      setLocations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "",
            }}
            center={{ lat: lat, lng: lng }}
            defaultZoom={zoomLevel}
          >
            {/* {locations.map((location, id) => (
              <LocationPin
                id={id}
                lat={location.lat}
                lng={location.lon}
                text={location.location}
              />
            ))} */}
          </GoogleMapReact>
        </div>
      </div>
    </>
  );
}
