import React, { useEffect, useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  makeVisFlexible,
} from "react-vis";
import "./Graph.css";

function Graph() {
  const [year, setYear] = useState([]);
  const [population, setPopulation] = useState([]);

  const FlexibleXYPlot = makeVisFlexible(XYPlot);

  const apiUrl =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

  const makeRequest = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) =>
        res.data.map((item) => {
          setYear(item.Year);
          setPopulation(item.Population);
          console.log(year);
          console.log(population);
        })
      );
  };

  useEffect(() => {
    makeRequest();
  }, []);

  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  return (
    <div className="graph__container">
      <FlexibleXYPlot className="graph__plot" border={"2px solid black"}>
        <VerticalBarSeries data={data} />
        <XAxis />
        <YAxis />
      </FlexibleXYPlot>
    </div>
  );
}

export default Graph;
