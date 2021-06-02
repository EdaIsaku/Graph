import React, { Component } from "react";
import Header from "../components/Header/Header";
import MyResponsiveBar from "../components/Charts/Bar/Bar";
import MyResponsiveLine from "../components/Charts/Line/Line";
import { getDataForChart, getDataForLineChart } from "../utility";
import "./Dashboard.css";

const apiURL = "https://covid-api.mmediagroup.fr/v1/cases";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch(apiURL)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: getDataForChart(res),
          dataLine: getDataForLineChart(res),
        });
      });
  }

  render() {
    const { data, dataLine } = this.state;
    console.log("dash", dataLine);
    return (
      <div className="dashboard__container">
        <div className="dashboard__container__header">
          <Header />
        </div>
        <div className="dashboard__container__graph">
          <div className="dashboard__container__graph__box">
            <MyResponsiveBar data={data} />
          </div>
          <div className="dashboard__container__graph__box">
            <MyResponsiveLine data={dataLine} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
