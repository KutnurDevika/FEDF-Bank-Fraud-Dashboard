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

        {/* Fraud Alerts Table */}
<div className="table-section">
  <div className="section-header">
    <h2>Recent Fraud Alerts</h2>
    <span>5 alerts</span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Alert ID</th>
        <th>Alert Type</th>
        <th>Risk Level</th>
        <th>Status</th>
        <th>Date</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>ALT-00192</td>
        <td>Suspicious Login</td>
        <td><span className="badge high">High</span></td>
        <td><span className="badge active">Active</span></td>
        <td>2026-06-05 09:14</td>
      </tr>

      <tr>
        <td>ALT-00191</td>
        <td>Large Transfer</td>
        <td><span className="badge critical">Critical</span></td>
        <td><span className="badge investigate">Investigating</span></td>
        <td>2026-06-05 08:57</td>
      </tr>

      <tr>
        <td>ALT-00190</td>
        <td>Multiple Failed Logins</td>
        <td><span className="badge medium">Medium</span></td>
        <td><span className="badge resolved">Resolved</span></td>
        <td>2026-06-05 08:31</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Transactions */}
<div className="table-section">
  <div className="section-header">
    <h2>Recent Transactions</h2>
    <span>Last 5 flagged</span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>Customer</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Risk Score</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>TXN-88412</td>
        <td>Arjun Mehta</td>
        <td>₹4,82,000</td>
        <td><span className="badge active">Flagged</span></td>
        <td>92</td>
      </tr>

      <tr>
        <td>TXN-88411</td>
        <td>Priya Sharma</td>
        <td>₹1,25,500</td>
        <td><span className="badge resolved">Clear</span></td>
        <td>12</td>
      </tr>

      <tr>
        <td>TXN-88410</td>
        <td>Rahul Gupta</td>
        <td>₹9,40,000</td>
        <td><span className="badge investigate">Review</span></td>
        <td>67</td>
      </tr>
    </tbody>
  </table>
</div>

{/* Analytics + Monitoring */}
<div className="dashboard-row">

  <div className="analytics-section">
    <h2>Fraud Analytics</h2>

    <div className="metric">
      <span>Fraud Detection Accuracy</span>
      <span>98.7%</span>
    </div>

    <div className="metric">
      <span>Alert Resolution Rate</span>
      <span>87.4%</span>
    </div>

    <div className="metric">
      <span>Monthly Performance</span>
      <span>94.1%</span>
    </div>

    <div className="metric">
      <span>System Health Score</span>
      <span>99.2%</span>
    </div>
  </div>

  <div className="monitoring-section">
    <h2>Security Monitoring</h2>

    <div className="monitor-item">🟢 Monitoring Active</div>
    <div className="monitor-item">🟢 Alert Engine Running</div>
    <div className="monitor-item">🟢 Security Systems Online</div>
    <div className="monitor-item">🟢 Database Connected</div>

  </div>

</div>

{/* Activity + Insights */}

<div className="dashboard-row">

  <div className="activity-section">
    <h2>Recent Activity</h2>

    <ul>
      <li>⚡ Alert generated</li>
      <li>🔍 Fraud case investigated</li>
      <li>🚩 Transaction flagged</li>
      <li>🔒 Account secured</li>
      <li>📤 Report exported</li>
    </ul>
  </div>

  <div className="insights-section">
    <h2>Banking Security Insights</h2>

    <div className="insight-grid">
      <div className="insight-card">
        <h3>247</h3>
        <p>Total Alerts Today</p>
      </div>

      <div className="insight-card">
        <h3>98.7%</h3>
        <p>Success Rate</p>
      </div>

      <div className="insight-card">
        <h3>62</h3>
        <p>Under Review</p>
      </div>

      <div className="insight-card">
        <h3>5 Active</h3>
        <p>Recommendations</p>
      </div>
    </div>
  </div>

</div>

{/* Footer */}

<footer className="dashboard-footer">
  <p>🛡️ Bank Fraud Detection Alert Dashboard</p>
  <span>🟢 System Operational</span>
</footer>

      </div>


    </div>
  );
};

export default Dashboard;