import React from "react";
import Header from "./Header";
import Graph from "./Graph";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <Header />
      <Graph />
    </div>
  );
}

export default Dashboard;
