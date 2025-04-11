// src/components/DriverLocation.js
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { ref, set } from "firebase/database";
import {database} from "../firebase";


const DriverLocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

            if (auth.currentUser) {
              const busLocationRef = ref(database, `busLocations/${auth.currentUser.uid}`);
              set(busLocationRef, {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                timestamp: Date.now(),
              });
            }
          },
          (err) => setError("Location access denied! Enable GPS."),
          { enableHighAccuracy: true }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    fetchLocation();
  }, []);

  return (
    <div>
      <h2>Driver Live Location</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>Updating location...</p>
      )}
      {latitude && longitude && (
        <p>
          <b>Latitude:</b> {latitude} | <b>Longitude:</b> {longitude}
        </p>
      )}
    </div>
  );
};

export default DriverLocation;
