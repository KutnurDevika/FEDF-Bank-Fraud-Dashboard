import React from "react";
import "../styles/Dashboard.css";

function Dashboard() {

  const stats = [
    { value: "247", title: "Active Fraud Alerts" },
    { value: "1,84,392", title: "Transactions Monitored" },
    { value: "38", title: "High Risk Cases" },
    { value: "98.7%", title: "Detection Accuracy" }
  ];

  const alerts = [
    {
      id: "ALT-00192",
      type: "Suspicious Login",
      risk: "High",
      status: "Active"
    },
    {
      id: "ALT-00191",
      type: "Large Transfer",
      risk: "Critical",
      status: "Investigating"
    },
    {
      id: "ALT-00190",
      type: "Multiple Failed Logins",
      risk: "Medium",
      status: "Resolved"
    }
  ];

  const transactions = [
    {
      id: "TXN-88412",
      customer: "Arjun Mehta",
      amount: "₹4,82,000",
      status: "Flagged"
    },
    {
      id: "TXN-88411",
      customer: "Priya Sharma",
      amount: "₹1,25,500",
      status: "Clear"
    },
    {
      id: "TXN-88410",
      customer: "Rahul Gupta",
      amount: "₹9,40,000",
      status: "Review"
    }
  ];

  const analytics = [
    "Fraud Detection Accuracy - 98.7%",
    "Alert Resolution Rate - 87.4%",
    "Monitoring Performance - 94.1%",
    "System Health Score - 99.2%"
  ];

  const monitoring = [
    "Monitoring Active",
    "Alert Engine Running",
    "Security Systems Online",
    "Database Connected"
  ];

  const activities = [
    "Alert Generated",
    "Fraud Case Investigated",
    "Transaction Flagged",
    "Account Secured"
  ];

  const insights = [
    "Total Alerts Today: 247",
    "Fraud Prevention Rate: 98.7%",
    "Transactions Under Review: 62",
    "Security Recommendations: 5"
  ];

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

      {/* Statistics */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Risk Analysis + Quick Actions */}
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

      {/* Fraud Alerts */}
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
            {alerts.map((alert) => (
              <tr key={alert.id}>
                <td>{alert.id}</td>
                <td>{alert.type}</td>
                <td>{alert.risk}</td>
                <td>{alert.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Transactions */}
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
            {transactions.map((txn) => (
              <tr key={txn.id}>
                <td>{txn.id}</td>
                <td>{txn.customer}</td>
                <td>{txn.amount}</td>
                <td>{txn.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Analytics + Security */}
      <div className="dashboard-row">

        <div className="card">
          <h2>Fraud Analytics</h2>

          {analytics.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="card">
          <h2>Security Monitoring</h2>

          <ul>
            {monitoring.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Activity + Insights */}
      <div className="dashboard-row">

        <div className="card">
          <h2>Recent Activity</h2>

          <ul>
            {activities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2>Banking Security Insights</h2>

          {insights.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Dashboard;