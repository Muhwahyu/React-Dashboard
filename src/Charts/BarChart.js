import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

function BarChart(props) {
  return (
    <div className={styles.bar}>
      <Bar data={props.data} width={props.width} height={props.height} />
    </div>
  );
}

export default BarChart;
