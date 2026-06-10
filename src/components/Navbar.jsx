import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">

      <div className="logo">
        FraudAlert
      </div>

      <div className="nav-links">
<Link to="/">Home</Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link to="/signup">
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              Dashboard
            </Link>

            <button
              className="nav-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;