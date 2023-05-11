import axios from "axios";

export async function wifiLocations() {
  const response = await axios.get(
    `https://data.cityofnewyork.us/resource/varh-9tsp.json?$$app_token=Q`
  );
  return response;
}
