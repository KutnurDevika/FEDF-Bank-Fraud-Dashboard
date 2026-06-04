import React from "react";
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">

      <div className="signup-container">

        {/* Left Side */}
        <div className="signup-left">

          <p className="signup-tag">
            BANK FRAUD DETECTION SYSTEM
          </p>

          <h1>Create Account</h1>

          <p>
            Join our secure fraud monitoring platform and
            strengthen banking security through intelligent
            real-time monitoring.
          </p>

          <div className="signup-features">
            <p>✓ Fraud Monitoring</p>
            <p>✓ Real-Time Alerts</p>
            <p>✓ Secure Banking Dashboard</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="signup-right">

          <p className="signup-badge">
            CREATE NEW ACCOUNT
          </p>

          <h2>Sign Up</h2>

          <form>

            <input
              type="text"
              placeholder="Enter Name"
            />

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Create Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-link">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;