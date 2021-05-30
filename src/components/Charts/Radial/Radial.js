import React from "react";
import { RadialChart, makeVisFlexible } from "react-vis";
import "../Radial/Radial.css";

function Radial() {
  const myData = [
    { angle: 3, label: "test" },
    { angle: 5 },
    { angle: 2 },
    { angle: 4 },
  ];
  const FlexibleRadialChart = makeVisFlexible(RadialChart);
  return (
    <div className="radial__container">
      <FlexibleRadialChart
        data={myData}
        width={300}
        height={300}
        innerRadius={140}
        // padAngle={0.04}
        showLabels={true}
        onSeriesClick={(event) => console.log(event)}
      />
    </div>
  );
}

export default Radial;
