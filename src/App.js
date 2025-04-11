// src/App.js
import { Routes, Route,} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import DriverLogin from "./components/DriverLogin";
import DriverDashboard from "./components/DriverDashboard";
import UserAuth from "./components/UserAuth";
import SearchBus from "./components/SearchBus";
import UserBusTracker from "./components/UserBusTracker";
import DriverLocation from "./components/DriverLocation";

function App() {
  return (
      <Routes>
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/driver-login" element={<DriverLogin />} />
        <Route path="/driver-dashboard" element={<DriverDashboard />} />
        <Route path="/" element={<UserAuth />} />
        <Route path="/search-bus" element={<SearchBus />} />
        <Route path="/bus-tracker" element={<UserBusTracker />} />
        <Route path="/driverlocation" element={<DriverLocation/>} />
      </Routes>
  );
}

export default App;
