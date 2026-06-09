import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  const [showMission, setShowMission] = useState(false);

  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">

        <div className="about-content">

          <span className="about-tag">
            ABOUT OUR PLATFORM
          </span>

          <h1>
            Building Trust Through Intelligent Banking Security
          </h1>

          <p>
            Learn about our mission, vision, and commitment to helping
            financial institutions detect fraud, reduce risks, and
            strengthen banking security through advanced analytics and
            real-time monitoring.
          </p>

          <button
            className="about-btn"
            onClick={() => setShowMission(true)}
          >
            Our Mission
          </button>

        </div>

        <div className="about-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="Bank Security"
          />
        </div>

      </section>

      {/* Highlights */}

      <section className="highlights">

        <div className="highlight-card">
          <h3>Our Mission</h3>
          <p>
            To help financial institutions detect suspicious activities,
            reduce fraud risks, and improve transaction security through
            intelligent monitoring solutions.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Our Vision</h3>
          <p>
            To create a secure and trustworthy banking environment where
            advanced analytics support proactive fraud prevention.
          </p>
        </div>

        <div className="highlight-card">
          <h3>Why Fraud Detection Matters</h3>
          <p>
            Early identification of fraudulent activities helps protect
            customers, minimize financial losses, and maintain confidence
            in banking services.
          </p>
        </div>

      </section>

      {/* Core Capabilities */}

      <section className="capabilities">

        <div className="section-title">
          <h2>Core Capabilities</h2>

          <p>
            Advanced tools designed to support fraud prevention and
            banking security.
          </p>
        </div>

        <div className="capability-grid">

          <div className="capability-card">
            <h3>Transaction Monitoring</h3>
            <p>
              Continuously analyze banking transactions to identify
              suspicious activities and unusual patterns.
            </p>
          </div>

          <div className="capability-card">
            <h3>Fraud Intelligence</h3>
            <p>
              Detect high-risk behaviors using analytical models and
              automated monitoring techniques.
            </p>
          </div>

          <div className="capability-card">
            <h3>Alert Management</h3>
            <p>
              Generate and manage fraud alerts to support rapid
              investigation and response.
            </p>
          </div>

          <div className="capability-card">
            <h3>Risk Evaluation</h3>
            <p>
              Assess transaction risks and prioritize activities
              requiring immediate attention.
            </p>
          </div>

        </div>

      </section>

      {/* Impact */}

      <section className="impact">

        <div className="section-title">
          <h2>Our Impact</h2>
        </div>

        <div className="impact-grid">

          <div className="impact-card">
            <h3>99.5%</h3>
            <p>Detection Accuracy</p>
          </div>

          <div className="impact-card">
            <h3>250K+</h3>
            <p>Transactions Monitored</p>
          </div>

          <div className="impact-card">
            <h3>24/7</h3>
            <p>Continuous Monitoring</p>
          </div>

          <div className="impact-card">
            <h3>500+</h3>
            <p>Fraud Alerts Generated</p>
          </div>

        </div>

      </section>

      {/* Mission Popup */}

      {showMission && (
        <div className="modal-overlay">

          <div className="modal-box">

            <h2>Our Mission</h2>

            <p>
              Our mission is to help financial institutions detect
              suspicious transactions, prevent fraudulent activities,
              and strengthen banking security through intelligent
              monitoring, risk analysis, and real-time alert generation.
            </p>

            <div className="popup-features">

              <div>✓ Fraud Prevention</div>

              <div>✓ Real-Time Monitoring</div>

              <div>✓ Risk Assessment</div>

              <div>✓ Secure Banking Operations</div>

            </div>

            <button
              className="close-btn"
              onClick={() => setShowMission(false)}
            >
              Got It
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default About; 