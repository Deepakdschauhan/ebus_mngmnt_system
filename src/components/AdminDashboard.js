// src/components/AdminDashboard.js
import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import "../style/forms.css";


const AdminDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("driver"); // Default role is driver
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user role in Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        role,
      });

      alert("Created successful!");
      setEmail("");
      setPassword("");
      
    } catch (error) {
      setMessage("Error creating account. Try again.");
    }
  };
  

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Create Driver/Traveler Account</p>
      <p></p>
      {message && <p>{message}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="driver">Driver</option>
          <option value="traveler">Traveler</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
