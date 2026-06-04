import React from "react";
import "../styles/Login.css";

const Login = () => {
  return (

    
    <div className="login-page">

      <div className="login-container">


        <div className="login-left">
          <h1>Welcome Back</h1>

          <p>
            Monitor suspicious transactions, manage fraud alerts,
and strengthen banking security through intelligent
real-time monitoring.
          </p>
        </div>

        <div className="login-right">
           <p className="login-badge">
  Secure Banking Access
</p>
          <h2>Login</h2>

          <form>

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />
                <div className="remember">
  <label>
    <input type="checkbox" />
    Remember Me
  </label>
</div>
            <button type="submit">
              Login
            </button>

          </form>

          <p className="forgot">
            Forgot Password?
          </p>

          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;