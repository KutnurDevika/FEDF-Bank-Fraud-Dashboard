import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>🛡️ Bank Fraud Detection Alert Dashboard</h1>
          <p>
            Monitor fraud alerts, suspicious transactions and banking
            security activities in real time.
          </p>
        </div>

        <div className="analyst">
          <span className="live">● Live Monitoring</span>
          <div>
            <h4>Security Analyst</h4>
            <p>5 June 2026 • 10:48 AM</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">

        <div className="stat-card">
          <h2>247</h2>
          <p>Active Fraud Alerts</p>
        </div>

        <div className="stat-card">
          <h2>1,84,392</h2>
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

      {/* Risk Analysis + Actions */}
      <div className="dashboard-row">

        <div className="card">
          <h2>Fraud Risk Analysis</h2>

          <div className="risk-item">
            <span>High Risk</span>
            <div className="progress">
              <div className="fill high"></div>
            </div>
          </div>

          <div className="risk-item">
            <span>Medium Risk</span>
            <div className="progress">
              <div className="fill medium"></div>
            </div>
          </div>

          <div className="risk-item">
            <span>Low Risk</span>
            <div className="progress">
              <div className="fill low"></div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Quick Actions</h2>

          <div className="actions-grid">
            <button>Generate Alert</button>
            <button>View Reports</button>
            <button>Monitor Transactions</button>
            <button>Export Data</button>
            <button>Security Logs</button>
            <button>Risk Assessment</button>
          </div>
        </div>

      </div>

      {/* Fraud Alerts Table */}
      <div className="card">
        <h2>Recent Fraud Alerts</h2>

        <table>
          <thead>
            <tr>
              <th>Alert ID</th>
              <th>Type</th>
              <th>Risk</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>ALT-00192</td>
              <td>Suspicious Login</td>
              <td>High</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>ALT-00191</td>
              <td>Large Transfer</td>
              <td>Critical</td>
              <td>Investigating</td>
            </tr>

            <tr>
              <td>ALT-00190</td>
              <td>Multiple Failed Logins</td>
              <td>Medium</td>
              <td>Resolved</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Transactions Table */}
      <div className="card">
        <h2>Recent Transactions</h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TXN-88412</td>
              <td>Arjun Mehta</td>
              <td>₹4,82,000</td>
              <td>Flagged</td>
            </tr>

            <tr>
              <td>TXN-88411</td>
              <td>Priya Sharma</td>
              <td>₹1,25,500</td>
              <td>Clear</td>
            </tr>

            <tr>
              <td>TXN-88410</td>
              <td>Rahul Gupta</td>
              <td>₹9,40,000</td>
              <td>Review</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Analytics + Security */}
      <div className="dashboard-row">

        <div className="card">
          <h2>Fraud Analytics</h2>

          <p>Fraud Detection Accuracy - 98.7%</p>
          <p>Alert Resolution Rate - 87.4%</p>
          <p>Monitoring Performance - 94.1%</p>
          <p>System Health Score - 99.2%</p>
        </div>

        <div className="card">
          <h2>Security Monitoring</h2>

          <ul>
            <li>Monitoring Active</li>
            <li>Alert Engine Running</li>
            <li>Security Systems Online</li>
            <li>Database Connected</li>
          </ul>
        </div>

      </div>

      {/* Activity + Insights */}
      <div className="dashboard-row">

        <div className="card">
          <h2>Recent Activity</h2>

          <ul>
            <li>Alert Generated</li>
            <li>Fraud Case Investigated</li>
            <li>Transaction Flagged</li>
            <li>Account Secured</li>
          </ul>
        </div>

        <div className="card">
          <h2>Banking Security Insights</h2>

          <p>Total Alerts Today: 247</p>
          <p>Fraud Prevention Rate: 98.7%</p>
          <p>Transactions Under Review: 62</p>
          <p>Security Recommendations: 5</p>
        </div>

      </div>

    
    </div>
  );
}

export default Dashboard;