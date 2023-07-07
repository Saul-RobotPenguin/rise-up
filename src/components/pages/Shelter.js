import Map from "../Map";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Shelter({ lat, lng }) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/bmxf-3rd4.json`
      );
      let shelterCoords = response.data.map((shelter) => {
        return {
          lat: shelter.latitude,
          lon: shelter.longitude,
        };
      });

      setLocations(shelterCoords);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Shelter Locations</div>
      <Map lat={lat} lng={lng} locations={locations} />
    </>
  );
}
