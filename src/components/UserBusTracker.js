// src/components/UserBusTracker.js

import { useState, useEffect } from "react";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";


const UserBusTracker = () => {
  const [busLocations, setBusLocations] = useState({});

  useEffect(() => {
    const busLocationRef = ref(db, "busLocations");
    onValue(busLocationRef, (snapshot) => {
      if (snapshot.exists()) {
        setBusLocations(snapshot.val());
      }
    });
  }, []);

  return (
    <div>
      <h2>Live Bus Tracking</h2>
      {Object.keys(busLocations).length > 0 ? (
        <ul>
          {Object.entries(busLocations).map(([busId, location]) => (
            <li key={busId}>
              <b>Bus {busId}:</b> Latitude: {location.latitude}, Longitude: {location.longitude}
            </li>
          ))}
        </ul>
      ) : (
        <p>No live locations available.</p>
      )}
    </div>
  );
};

export default UserBusTracker;
