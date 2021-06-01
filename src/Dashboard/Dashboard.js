import React, { Component } from "react";
import Header from "../components/Header/Header";
import MyResponsiveBar from "../components/Charts/Bar/Bar";
import { getDataForChart } from "../utility";
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
        });
      });
  }

  render() {
    const { data } = this.state;
    console.log("from dashboard", data);
    return (
      <div className="dashboard__container">
        <div className="dashboard__container__header">
          <Header />
        </div>
        <div className="dashboard__container__graph">
          <MyResponsiveBar data={data} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
