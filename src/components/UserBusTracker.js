import { useState } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import "../style/forms.css";

const UserBusTracker = () => {
  const [searchBus, setSearchBus] = useState("");
  const [filteredBus, setFilteredBus] = useState(null);


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const docSnap = await getDoc(doc(db, "busNumberMap", searchBus));
      if (docSnap.exists()) {
        const { uid } = docSnap.data();
        const locationRef = ref(database, `busLocations/${uid}`);
        onValue(locationRef, (snapshot) => {
          if (snapshot.exists()) {
            setFilteredBus({ id: searchBus, ...snapshot.val() });
          } else {
            setFilteredBus(null);
          }
        });
      } else {
        setFilteredBus(null);
      }
    } catch (err) {
      console.error("Error fetching bus location:", err);
    }
  };

  return (
    <div>
      <h2>Live Bus Location</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Bus Number"
          value={searchBus}
          onChange={(e) => setSearchBus(e.target.value)}
          required
        />
        <button type="submit">Track Bus</button>
      </form>

      {filteredBus ? (
        <div style={{ marginTop: "20px", background:"LightGoldenrodYellow	"}}>
          <p><b>Bus {filteredBus.id}</b></p>
          <p>Latitude: {filteredBus.latitude}</p>
          <p>Longitude: {filteredBus.longitude}</p>
        </div>
      ) : (
        searchBus && <p>No location found for Bus {searchBus}</p>
      )}
    </div>
  );
};

export default UserBusTracker;
