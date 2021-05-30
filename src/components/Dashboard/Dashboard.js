import React, { Component } from "react";
import Header from "../Header/Header";
import Plot from "../Charts/Plot/Plot";
import Radial from "../Charts/Radial/Radial";
import "./Dashboard.css";
import { ContinuousColorLegend } from "react-vis";

const apiUrl =
  "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      labelData: [],
    };
  }
  componentDidMount() {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.map((item) => ({
            y: item.Population,
            x: Number(item.Year),
          })),
          labelData: res.data.map((item) => ({
            y: item.Population,
            x: Number(item.Year),
            label: item.Population,
          })),
        });
      });
  }

  render() {
    const { data, labelData } = this.state;
    return (
      <div className="dashboard__container">
        <div className="dashboard__container__header">
          <Header />
        </div>
        <div className="dashboard__container__graph">
          <Plot data={data} labelData={labelData} />
          <Radial />
        </div>
      </div>
    );
  }
}

export default Dashboard;
