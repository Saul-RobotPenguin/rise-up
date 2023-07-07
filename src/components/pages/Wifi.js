import Map from "../Map";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Wifi({ lat, lng }) {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://data.cityofnewyork.us/resource/varh-9tsp.json?$$app_token=${process.env.REACT_APP_WIFI_LOCATIONS}`
      );
      console.log(response.data);
      setLocations(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>Wifi Locations</div>
      <Map lat={lat} lng={lng} locations={locations} />
    </>
  );
}
