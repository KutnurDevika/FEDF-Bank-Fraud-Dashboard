import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      setError("Please create an account first");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
     localStorage.setItem("isLoggedIn", "true");
window.location.href = "/dashboard";
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        {/* Left Side */}
        <div className="login-left">

          <h1>Login Securely</h1>

          <p>
            Access your fraud monitoring dashboard,
            review alerts, and manage banking
            security operations in real time.
          </p>

          <div className="login-features">
            <p>✓ Fraud Monitoring</p>
            <p>✓ Real-Time Alerts</p>
            <p>✓ Secure Banking Dashboard</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="login-right">

          <p className="login-badge">
            Secure Banking Access
          </p>

          <h2>Login</h2>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <div className="password-field">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />

              <span
                className="show-password"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </span>

            </div>

            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            <button type="submit">
              Login Securely
            </button>

            {error && (
              <p className="error">
                {error}
              </p>
            )}

          </form>

          <div className="security-note">
            🔒 Bank-Level Security Protection
          </div>

          <p className="signup-link">
            Don't have an account?
            <a href="/signup">
              {" "}
              Sign Up
            </a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;