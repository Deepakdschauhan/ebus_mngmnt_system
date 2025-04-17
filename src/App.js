import { Routes, Route,} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import DriverLogin from "./components/DriverLogin";
import DriverDashboard from "./components/DriverDashboard";
import UserAuth from "./components/UserAuth";
import SearchBus from "./components/SearchBus";
import UserBusTracker from "./components/UserBusTracker";
import DriverLocation from "./components/DriverLocation";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
     < >
     <div className="bgimg">
      <Navbar/>
      <Routes>
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/driver_login" element={<DriverLogin />} />
        <Route path="/driver_dashboard" element={<DriverDashboard />} />
        <Route path="/" element={<UserAuth />} />
        <Route path="/search_bus" element={<SearchBus />} />
        <Route path="/bus_tracker" element={<UserBusTracker />} />
        <Route path="/driver_location" element={<DriverLocation/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
