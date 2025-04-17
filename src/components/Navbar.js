import { Link } from "react-router-dom";
import "../style/Navbar.css"; // Optional for custom styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🚌 eBus System</h2>
      <ul className="nav-links">
        <li><Link to="/">User Login</Link></li>
        <li><Link to="/search_bus">Search Bus</Link></li>
        <li><Link to="/bus_tracker">Track Bus</Link></li>
        <li><Link to="/driver_login">Driver Login</Link></li>
        <li><Link to="/admin_login">Admin Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
