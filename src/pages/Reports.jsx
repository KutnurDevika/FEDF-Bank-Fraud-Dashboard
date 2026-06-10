import React from "react";
import { Link } from "react-router-dom";
import "../styles/Reports.css";

function Reports() {
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

  return (
    <div className="reports-page">

      <div className="reports-header">
        <h1>Fraud Reports</h1>
        <Link to="/dashboard">
          <button>Back to Dashboard</button>
        </Link>
      </div>

      <div className="report-stats">

        <div className="report-card">
          <h2>247</h2>
          <p>Total Alerts</p>
        </div>

        <div className="report-card">
          <h2>38</h2>
          <p>Critical Cases</p>
        </div>

        <div className="report-card">
          <h2>194</h2>
          <p>Resolved Alerts</p>
        </div>

        <div className="report-card">
          <h2>53</h2>
          <p>Active Alerts</p>
        </div>

      </div>

      <div className="reports-table">

        <h2>All Fraud Alerts</h2>

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

    </div>
  );
}

export default Reports;