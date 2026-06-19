import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Bank Fraud Detection Alert Dashboard</h3>

      <p>
      React-Based Banking Security Dashboard
      </p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>

      <p className="copyright">
        © 2026 Bank Fraud Detection Alert Dashboard.
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;