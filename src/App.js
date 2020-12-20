import { Doughnut, Bar } from "react-chartjs-2";
import { chartData } from "./chartData";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <h1>Welcome to my dashboard</h1>
      <div className={styles.chart}>
        <Doughnut data={chartData} width={100} height={50} />
        <Bar data={chartData} width={100} height={50} />
      </div>
    </div>
  );
}

export default App;
