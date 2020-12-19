import "./App.css";
import { Doughnut } from "react-chartjs-2";

import { chartData } from "./dummyData";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my dashboard</h1>
      <Doughnut data={chartData} width={100} height={50} />
    </div>
  );
}

export default App;
