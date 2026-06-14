import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {
  useNavigate
} from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

 

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");
  const [analysts, setAnalysts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
const viewReports = () => {
  navigate("/reports");
};
const goToTransactions = () => {
  document
    .getElementById("transactions")
    ?.scrollIntoView({ behavior: "smooth" });
};

const exportData = () => {
  const data = JSON.stringify(alerts, null, 2);

  const blob = new Blob([data], {
    type: "application/json",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = "fraud-alerts.json";

  link.click();
};

const securityLogs = () => {
  alert(
    "Security Logs\n\nFirewall Active\nDatabase Secure\nNo Threats Detected"
  );
};

const riskAssessment = () => {
  const critical = alerts.filter(
    (alert) => alert.risk === "Critical"
  ).length;

  alert(
    `Current Critical Alerts: ${critical}`
  );
};
  const generateAlert = () => {

  const randomId =
    "ALT-" + Math.floor(Math.random() * 100000);

  const alertTypes = [
    "Suspicious Login",
    "Large Transfer",
    "Multiple Failed Logins",
    "Unusual Transaction"
  ];

  const risks = [
    "High",
    "Critical",
    "Medium"
  ];

  const newAlert = {
    id: randomId,
    type: alertTypes[
      Math.floor(Math.random() * alertTypes.length)
    ],
    risk: risks[
      Math.floor(Math.random() * risks.length)
    ],
    status: "Active"
  };

  setAlerts((prevAlerts) => [
  newAlert,
  ...prevAlerts
]);

  alert("🚨 Fraud Alert Generated!");
};

  const stats = [
    { value: "247", title: "Active Fraud Alerts" },
    { value: "1,84,392", title: "Transactions Monitored" },
    { value: "38", title: "High Risk Cases" },
    { value: "98.7%", title: "Detection Accuracy" }
  ];

const defaultAlerts = [
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

const [alerts, setAlerts] = useState(() => {
  const savedAlerts = localStorage.getItem("alerts");

  return savedAlerts
    ? JSON.parse(savedAlerts)
    : defaultAlerts;
});

useEffect(() => {
  localStorage.setItem(
    "alerts",
    JSON.stringify(alerts)
  );
}, [alerts]);
useEffect(() => {
  fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
    .then((response) =>
      response.json()
    )
    .then(() =>
      setAnalysts([
        {
          id: 1,
          name: "Arjun Mehta",
          email: "arjun.mehta@fraudalert.com",
        },
        {
          id: 2,
          name: "Priya Sharma",
          email: "priya.sharma@fraudalert.com",
        },
        {
          id: 3,
          name: "Rahul Gupta",
          email: "rahul.gupta@fraudalert.com",
        },
        {
          id: 4,
          name: "Sneha Reddy",
          email: "sneha.reddy@fraudalert.com",
        },
        {
          id: 5,
          name: "Vikram Patel",
          email: "vikram.patel@fraudalert.com",
        },
      ])
    )
    .catch((error) =>
      console.log(error)
    );
}, []);
 
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

  const filteredAlerts = alerts.filter((alert) => {

    const matchesSearch =
      alert.id.toLowerCase().includes(
        search.toLowerCase()
      );

    const matchesRisk =
      riskFilter === "All" ||
      alert.risk === riskFilter;

    return matchesSearch && matchesRisk;
  });

  const fraudData = [
  { month: "Jan", alerts: 120 },
  { month: "Feb", alerts: 180 },
  { month: "Mar", alerts: 150 },
  { month: "Apr", alerts: 220 },
  { month: "May", alerts: 190 },
  { month: "Jun", alerts: 247 }
];

  return (
    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">

        <div>
          <h1>🛡️ Bank Fraud Detection Alert Dashboard</h1>

          <p>
            Monitor fraud alerts, suspicious transactions
            and banking security activities in real time.
          </p>

          <h3>
            Welcome, {user?.name}
          </h3>
        </div>

        <div className="analyst">

          <span className="live">
            ● Live Monitoring
          </span>

          <div>
            <h4>Security Analyst</h4>
            <p>5 June 2026 • 10:48 AM</p>
          </div>

       

        </div>

      </div>

      {/* Statistics */}
      <div className="stats-grid">

        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
          >
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>
        ))}

      </div>

      {/* Risk + Actions */}
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

  <button onClick={generateAlert}>
    Generate Alert
  </button>

  <button onClick={viewReports}>
    View Reports
  </button>

  <button onClick={goToTransactions}>
    Monitor Transactions
  </button>

  <button onClick={exportData}>
    Export Data
  </button>

  <button onClick={securityLogs}>
    Security Logs
  </button>

  <button onClick={riskAssessment}>
    Risk Assessment
  </button>

</div>
        </div>

      </div>

      {/* Fraud Alerts */}
      <div className="card">

        <h2>Recent Fraud Alerts</h2>

        <div className="alert-controls">

          <input
            type="text"
            placeholder="Search Alert ID..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={riskFilter}
            onChange={(e) =>
              setRiskFilter(e.target.value)
            }
          >
            <option value="All">
              All Risks
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Critical">
              Critical
            </option>
          </select>

        </div>

        <p className="alert-count">
          Showing {filteredAlerts.length} alerts
        </p>

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

  {filteredAlerts.length === 0 ? (

    <tr>
      <td colSpan="4">
        No fraud alerts found
      </td>
    </tr>

  ) : (

    filteredAlerts.map((alert) => (
      <tr key={alert.id}>
        <td>{alert.id}</td>
        <td>{alert.type}</td>
        <td>{alert.risk}</td>
        <td>{alert.status}</td>
      </tr>
    ))

  )}

</tbody>

        </table>

      </div>

      {/* Transactions */}
      <div className="card" id="transactions">

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

      <div className="card">

  <h2>Security Analyst Team</h2>

  {analysts.map((analyst) => (
    <div key={analyst.id}>
      <p>
        <strong>{analyst.name}</strong>
      </p>

      <p>{analyst.email}</p>

      <hr />
    </div>
  ))}

</div>


<div className="card">
  <h2>Fraud Analytics Chart</h2>

  <ResponsiveContainer
    width="100%"
    height={300}
  >
    <BarChart data={fraudData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar
        dataKey="alerts"
        fill="#2563eb"
      />
    </BarChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}

export default Dashboard;