import { useEffect, useState } from "react";
import { chartData } from "./chartData";
import * as d3 from "d3-scale-chromatic";

import { BarChart, DoughnutChart } from "./Charts";
import { fetchData } from "./API";

import styles from "./App.module.css";
// import { interpolateBlues } from "d3-scale-chromatic";

const App = () => {
  // <--------------- Data Section --------------->

  const [data, setData] = useState({
    items: [],
    DropDownList: [],
    organicSource: null,
    directSource: null,
    referralSource: null,
    selectedValue: "Jan 2018",
  });

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
      spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
    };
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

    const rows = [];
    let dropDownList = [];
    // {month, organic sourc, direct source, referral source, email source}
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //   console.log(data.valueRanges[0].values);
        let batchRowValues = data.valueRanges[0].values;

        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        //dropdonw list
        rows.map((arr) => dropDownList.push(arr.month));
        //   dropDownList = Array.from(new Set(dropDownList)).reverse();

        if (rows.length && dropDownList.length) {
          setData({
            ...data,
            items: rows,
            DropDownList: dropDownList,
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // const getData = (arg) => {
  //   if ((rows || dropDownList) && arg === state.selectedValue) {
  //     setState(() => ({
  //       ...state,
  //       items: rows,
  //       dropDownList,
  //     }));
  //   }
  // };

  // const updateDashboard = () => {
  //   getData();
  // };
  // const dataforD = chartData({
  //   labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
  //   data: [120, 390, 500, 205, 122],
  //   colorRangeInfo: {
  //     colorStart: 0.25,
  //     colorEnd: 0.75,
  //     useEndAsStart: true,
  //   },
  //   scale: d3.interpolateCool,
  //   dataLabel: "data for doughnut chart",
  // });

  // const dataforB = chartData({
  //   labels: state.dropDownList,
  //   data: state.items[0],
  //   colorRangeInfo: {
  //     colorStart: 0,
  //     colorEnd: 1,
  //     useEndAsStart: true,
  //   },
  //   scale: d3.interpolateCool,
  //   dataLabel: "data for doughnut chart",
  // });
  // console.log(state.dropDownList);

  // <--------------- components here --------------->
  return (
    <div className={styles.App}>
      <h1>Welcome to my dashboard</h1>
      <select>
        {data.DropDownList.map((value, index) => (
          <option key={index + 1} value={value}>
            {value}
          </option>
        ))}
      </select>

      {/* <--------------- Widgets ---------------> */}
      <div className={styles.numbers}>something here</div>

      {/* <--------------- Charts ---------------> */}
      <div className={styles.chart}>
        {/* <BarChart data={dataforB} width={100} height={50} /> */}
        {/* <DoughnutChart data={dataforD} width={100} height={50} /> */}
      </div>
    </div>
  );
};

export default App;
