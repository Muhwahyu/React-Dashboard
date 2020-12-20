import { Doughnut } from "react-chartjs-2";
import styles from "./Charts.module.css";

import React from "react";

function DoughnutChart(props) {
  return (
    <div className={styles.doughnut}>
      <Doughnut data={props.data} width={props.width} height={props.height} />
    </div>
  );
}

export default DoughnutChart;
