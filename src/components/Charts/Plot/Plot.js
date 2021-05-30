import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  Hint,
  makeVisFlexible,
} from "react-vis";
import "./Plot.css";

function Plot({ data, labelData }) {
  const FlexibleXYPlot = makeVisFlexible(XYPlot);
  return (
    <div className="plot__container">
      <FlexibleXYPlot
        className="graph__plot"
        // margin={{ left: 100 }}
        xType="ordinal"
        color={"#64ffdb"}
      >
        <VerticalBarSeries data={data} barWidth={0.3} />
        <XAxis
          tickSize={0.1}
          style={{
            ticks: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
            title: { fill: "#6b6b76", fontWeight: 500 },
          }}
        />
        <YAxis
          title="Population"
          tickSize={0}
          hideTicks
          style={{
            ticks: { stroke: "#ADDDE1" },
            text: { stroke: "none", fill: "#6b6b76", fontWeight: 600 },
            title: { fill: "#6b6b76", fontWeight: 600 },
          }}
        />
      </FlexibleXYPlot>
    </div>
  );
}

export default Plot;
