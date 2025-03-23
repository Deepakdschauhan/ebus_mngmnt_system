// src/components/DriverDashboard.js
import { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const DriverDashboard = () => {
  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");
  const [busType, setBusType] = useState("AC");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePostBusInfo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "buses"), {
        driverId: auth.currentUser.uid,
        busNumber,
        route,
        busType,
        contact,
        timestamp: new Date(),
      });

      setMessage("Bus details added successfully!");
      setBusNumber("");
      setRoute("");
      setBusType("AC");
      setContact("");
    } catch (error) {
      setMessage("Error adding bus details.");
    }
  };

  const handleLogout = () => {
    signOut(auth);
    navigate("/driver-login");
  };

  return (
    <div>
      <h2>Driver Dashboard</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handlePostBusInfo}>
        <input
          type="text"
          placeholder="Enter Bus Number"
          value={busNumber}
          onChange={(e) => setBusNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          required
        />
        <select value={busType} onChange={(e) => setBusType(e.target.value)}>
          <option value="AC">AC</option>
          <option value="Non-AC">Non-AC</option>
        </select>
        <input
          type="text"
          placeholder="Enter Contact Details"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <button type="submit">Post Bus Info</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DriverDashboard;
