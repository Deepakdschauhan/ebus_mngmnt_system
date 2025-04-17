import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../style/forms.css";


const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration Successful!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful!");
        navigate("/search-bus");
      }
    } catch (error) {
      setError("Authentication Failed. Try Again.");
    }
  };

  return (
    <div>
      <h2>{isRegister ? "User Registration" : "User Login"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleAuth}>
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
        <button type="submit">{isRegister ? "Register" : "Login"}</button>
      </form>
      <p>
      <button onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer", color: "black" }}>
        {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
      </button>
      </p>
    </div>
  );
};

export default UserAuth;
