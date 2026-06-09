import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully!");

    navigate("/login");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">

        {/* Left Side */}
        <div className="signup-left">

          <h1>Create Account</h1>

          <p>
            Join our fraud detection platform and gain access to
            intelligent monitoring tools designed to enhance
            banking security.
          </p>

          <div className="signup-features">
            <p>✓ Secure Registration</p>
            <p>✓ Fraud Monitoring Access</p>
            <p>✓ Real-Time Security Alerts</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="signup-right">

          <p className="signup-badge">
            NEW USER REGISTRATION
          </p>

          <h2>Sign Up</h2>

          <form onSubmit={handleSignup}>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-field">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "Hide" : "Show"}
              </span>

            </div>

            <div className="password-field">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />

              <span
                className="show-password"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>

            </div>

            {error && (
              <p className="error">
                {error}
              </p>
            )}

            <button type="submit">
              Create Account
            </button>

          </form>

          <div className="security-note">
            🔒 Secure User Registration
          </div>

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