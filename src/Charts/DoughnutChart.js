import { Doughnut } from "react-chartjs-2";

import React from "react";

function DoughnutChart(props) {
  return (
    <Doughnut data={props.data} width={props.width} height={props.height} />
  );
}

export default DoughnutChart;
