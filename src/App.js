import Blog from "./components/Site";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const geolocation = navigator.geolocation;

  const getUsersCoordinates = () => {
    if (!geolocation) {
      console.error(
        "Geolocation API is not currenlty available for your browser, please switch to Google Chrome"
      );
    } else {
      geolocation.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLng(coords.longitude);
        },
        (error) => {
          console.error(
            " Something went wrong with getting your postion, please try again! :" +
              error
          );
        }
      );
    }
  };

  useEffect(() => {
    getUsersCoordinates();
  }, []);

  return (
    <div className="App">
      <Blog lat={lat} lng={lng} />
    </div>
  );
}

export default App;
