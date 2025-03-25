// src/components/SearchBus.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../style/forms.css";

const SearchBus = () => {
  const [buses, setBuses] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredBuses, setFilteredBuses] = useState([]);

  useEffect(() => {
    const fetchBuses = async () => {
      const busesCollection = await getDocs(collection(db, "buses"));
      setBuses(busesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchBuses();
  }, []);

  const handleSearch = () => {
    const filtered = buses.filter(bus => 
      bus.route.toLowerCase().includes(source.toLowerCase()) &&
      bus.route.toLowerCase().includes(destination.toLowerCase())
    );
    setFilteredBuses(filtered);
  };

  return (
    <div>
      <h2>Search Bus</h2>
      <input
        type="text"
        placeholder="Enter Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Available Buses</h3>
      {filteredBuses.length > 0 ? (
        filteredBuses.map((bus) => (
          <div key={bus.id} style={{ border: "1px solid black", padding: "10px", margin: "5px" }}>
            <p><b>Bus Number:</b> {bus.busNumber}</p>
            <p><b>Route:</b> {bus.route}</p>
            <p><b>Bus Type:</b> {bus.busType}</p>
            <p><b>Contact:</b> {bus.contact}</p>
          </div>
        ))
      ) : (
        <p>No buses found</p>
      )}
    </div>
  );
};

export default SearchBus;
