import React from "react";
import { chartData } from "./chartData";
import * as d3 from "d3-scale-chromatic";

import { BarChart, DoughnutChart } from "./Charts";

import styles from "./App.module.css";
// import { interpolateBlues } from "d3-scale-chromatic";

function App() {
  const dataforD = chartData({
    labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: false,
    },
    scale: d3.interpolateBlues,
    dataLabel: "data for doughnut chart",
  });
  const dataforB = chartData({
    labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: false,
    },
    scale: d3.interpolateBlues,
    dataLabel: "data for doughnut chart",
  });
  return (
    <div className={styles.App}>
      <h1>Welcome to my dashboard</h1>
      <div className={styles.numbers}>something here</div>
      <div className={styles.chart}>
        <BarChart data={dataforB} width={100} height={50} />
        <DoughnutChart data={dataforD} width={100} height={50} />
      </div>
    </div>
  );
}

export default App;
