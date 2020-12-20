import React from "react";
import { chartData } from "./chartData";
import * as d3 from "d3-scale-chromatic";

import { BarChart, DoughnutChart } from "./Charts";

import styles from "./App.module.css";
// import { interpolateBlues } from "d3-scale-chromatic";

function App() {
  // <--------------- Data Section --------------->
  const dataforD = chartData({
    labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
    data: [120, 390, 500, 205, 122],
    colorRangeInfo: {
      colorStart: 0.25,
      colorEnd: 0.75,
      useEndAsStart: true,
    },
    scale: d3.interpolateCool,
    dataLabel: "data for doughnut chart",
  });

  const dataforB = chartData({
    labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
    data: [420, 390, 500, 205, 122],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: true,
    },
    scale: d3.interpolateCool,
    dataLabel: "data for doughnut chart",
  });

  // <--------------- components here --------------->
  return (
    <div className={styles.App}>
      <h1>Welcome to my dashboard</h1>

      {/* <--------------- Widgets ---------------> */}
      <div className={styles.numbers}>something here</div>

      {/* <--------------- Charts ---------------> */}
      <div className={styles.chart}>
        {/* <BarChart data={dataforB} width={100} height={50} />
        <DoughnutChart data={dataforD} width={100} height={50} /> */}
      </div>
    </div>
  );
}

export default App;
