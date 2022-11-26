import React from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";
function Chart(props) {
  return (
    <div className="chart">

      {props.dataPoints.map(data=>{
        <Chart key={data.label}  value={data.value} maxValue={null} label={data.label}  />
      })}
    
    </div>
  );
}

export default Chart;
