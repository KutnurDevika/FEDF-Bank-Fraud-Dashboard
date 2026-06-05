import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">

        <div className="header-left">
          <h1>🛡️ Bank Fraud Detection Alert Dashboard</h1>
          <p>
            Monitor fraud alerts, suspicious transactions,
            and banking security activities in real time.
          </p>
        </div>

        <div className="header-right">
          <span className="live-badge">
            ● Live Monitoring
          </span>

          <div className="user-info">
            <div className="avatar">SA</div>

            <div>
              <h4>Security Analyst</h4>
              <p>Online</p>
            </div>
          </div>
        </div>

      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>247</h2>
          <p>Active Fraud Alerts</p>
        </div>

        <div className="stat-card">
          <h2>184,392</h2>
          <p>Transactions Monitored</p>
        </div>

        <div className="stat-card">
          <h2>38</h2>
          <p>High Risk Cases</p>
        </div>

        <div className="stat-card">
          <h2>98.7%</h2>
          <p>Detection Accuracy</p>
        </div>

      </div>

      {/* Risk Analysis */}
      <div className="dashboard-row">

        <div className="risk-section">
          <h2>Fraud Risk Analysis</h2>

          <div className="risk-item">
            <div className="risk-header">
              <span>High Risk</span>
              <span>15%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill high"
                style={{ width: "15%" }}
              ></div>
            </div>
          </div>

          <div className="risk-item">
            <div className="risk-header">
              <span>Medium Risk</span>
              <span>38%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill medium"
                style={{ width: "38%" }}
              ></div>
            </div>
          </div>

          <div className="risk-item">
            <div className="risk-header">
              <span>Low Risk</span>
              <span>47%</span>
            </div>

            <div className="progress">
              <div
                className="progress-fill low"
                style={{ width: "47%" }}
              ></div>
            </div>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="actions-section">

          <h2>Quick Actions</h2>

          <div className="actions-grid">

            <button>🚨 Generate Alert</button>

            <button>📊 View Reports</button>

            <button>💳 Transactions</button>

            <button>📤 Export Data</button>

            <button>🔐 Security Logs</button>

            <button>📋 Risk Assessment</button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;