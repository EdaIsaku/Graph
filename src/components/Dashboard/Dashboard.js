import React from "react";
import Header from "../Header/Header";
import Plot from "../Charts/Plot/Plot";
import Radial from "../Charts/Radial/Radial";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <div className="dashboard__container__header">
        <Header />
      </div>
      <div className="dashboard__container__graph">
        <Plot />
        <Radial />
      </div>
    </div>
  );
}

export default Dashboard;
