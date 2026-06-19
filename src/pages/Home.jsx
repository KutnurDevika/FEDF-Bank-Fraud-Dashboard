import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home">

     {/* Hero Section */}
<section className="hero">
  <div className="hero-container">

    <div className="hero-content">

      <span className="hero-badge">
        BANK FRAUD DETECTION SYSTEM
      </span>

      <h1>
        Bank Fraud Detection Alert Dashboard
      </h1>

      <p>
        Monitor fraud alerts, analyze risk patterns, and visualize banking security data through an interactive dashboard built with React.
      </p>

      <div className="hero-buttons">

        <button
          className="hero-btn"
          onClick={() => setShowInfo(true)}
        >
          Learn More
        </button>

        <button
          className="get-started-btn"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

      </div>

    </div>

    <div className="hero-image">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Fraud Detection Security"
      />
    </div>

  </div>
</section>
      {/* Fraud Detection Overview */}
      <section className="overview">

        <div className="section-header">
          <h2>Fraud Detection Overview</h2>

          <p>
            Our platform continuously analyzes banking transactions,
            identifies suspicious patterns, and generates real-time alerts
            to help financial institutions reduce fraud risks and improve
            operational security.
          </p>
        </div>

        <div className="overview-grid">

          <div className="overview-card">
            <h3>Real-Time Transaction Monitoring</h3>
            <p>
              Continuously track transactions and identify suspicious
              activities as they occur.
            </p>
          </div>

          <div className="overview-card">
            <h3>Fraud Alert Generation</h3>
            <p>
              Automatically generate alerts whenever unusual or
              high-risk financial activities are detected.
            </p>
          </div>

          <div className="overview-card">
            <h3>Risk Assessment</h3>
            <p>
              Evaluate transaction risks and prioritize investigations
              using intelligent monitoring techniques.
            </p>
          </div>

        </div>

      </section>

      {/* Key Features */}
      <section className="features">

        <div className="section-header">
          <h2>Key Features</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <span>🚨</span>
            <h3>Fraud Detection Alerts</h3>
            <p>
              Receive instant notifications about suspicious transactions
              and potential threats.
            </p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Transaction Analytics</h3>
            <p>
              Analyze transaction behavior and identify unusual patterns.
            </p>
          </div>

          <div className="feature-card">
            <span>🔍</span>
            <h3>Suspicious Activity Tracking</h3>
            <p>
              Monitor and investigate potentially fraudulent activities
              in real time.
            </p>
          </div>

          <div className="feature-card">
            <span>🔒</span>
            <h3>Secure Banking Environment</h3>
            <p>
              Protect financial assets and customer data through
              continuous monitoring.
            </p>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="stats">

        <div className="stat-card">
          <h2>99.5%</h2>
          <p>Fraud Detection Accuracy</p>
        </div>

        <div className="stat-card">
          <h2>250K+</h2>
          <p>Transactions Monitored</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Continuous Surveillance</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Fraud Alerts Generated</p>
        </div>

      </section>

      {/* CTA */}
      <section className="cta">

        <h2>Strengthen Banking Security Today</h2>

        <p>
          Enhance fraud prevention capabilities with intelligent monitoring,
          real-time alerts, and comprehensive transaction analysis.
        </p>

        <button
          className="cta-btn"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

      </section>

      {/* Learn More Popup */}
      {showInfo && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>About Our System</h2>

            <p>
              The Bank Fraud Detection Alert Dashboard helps financial
              institutions monitor transactions, detect suspicious
              activities, generate fraud alerts, assess transaction risks,
              and improve banking security through intelligent real-time
              monitoring and analytics.
            </p>

            <div className="popup-features">

              <div>✓ Real-Time Monitoring</div>
              <div>✓ Fraud Alert Generation</div>
              <div>✓ Risk Assessment</div>
              <div>✓ Secure Banking Environment</div>

            </div>

            <button
              className="close-btn"
              onClick={() => setShowInfo(false)}
            >
              Got It
            </button>

          </div>
        </div>
      )}

    </div>
  );
};

export default Home;