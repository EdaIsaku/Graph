import React from "react";
import { RadialChart, makeVisFlexible } from "react-vis";
import "../Radial/Radial.css";

function Radial() {
  const myData = [
    { angle: 1 },
    { angle: 5 },
    { angle: 2 },
    { angle: 6 },
    { angle: 3 },
  ];
  const FlexibleRadialChart = makeVisFlexible(RadialChart);
  return (
    <div className="radial__container">
      <FlexibleRadialChart data={myData} width={300} height={300} />;
    </div>
  );
}

export default Radial;
