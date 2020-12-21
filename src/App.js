import { useCallback, useEffect, useState } from "react";
import { chartData } from "./chartData";
import * as d3 from "d3-scale-chromatic";

import { BarChart, DoughnutChart } from "./Charts";
import Widget from "./Widgets/Widget";
// import { fetchData } from "./API";

import ControlledOpenSelect from "./select";
import styles from "./App.module.css";
// import { interpolateBlues } from "d3-scale-chromatic";

const App = () => {
  // <--------------- Data Section --------------->

  const [initData, setinitData] = useState({
    items: [],
    DropDownList: [],
  });

  const [stateData, setData] = useState({
    organicSource: null,
    directSource: null,
    referralSource: null,
    sessionsPerUser: null,
    avgSessionTime: null,
    pagePerSession: null,
    selectedValue: "Jan 2018",
  });

  useEffect(() => {
    console.log("use effect");
    const config = {
      apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
      spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
    };
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

    const rows = [];
    let dropDownList = [];
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
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

        if (!rows && !dropDownList) {
          console.log("not response");
        } else {
          setinitData((initData) => {
            return {
              ...initData,
              items: rows,
              DropDownList: dropDownList,
            };
          });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // const getData = (arg) => {
  //   console.log("getdata =>", arg, stateData.selectedValue);
  //   if (
  //     initData.items.length > 0 &&
  //     initData.DropDownList.length > 0 &&
  //     arg === stateData.selectedValue
  //   ) {
  //     console.log("getData", stateData.selectedValue);
  //   }
  // };

  useEffect(() => {
    if (initData.items.length > 0 && initData.DropDownList.length > 0) {
      const arr = initData.items.filter(
        (item) => item.month === stateData.selectedValue
      );
      console.log("data arr =>", arr);
      setData((stateData) => {
        return {
          ...stateData,
          organicSource: arr[0].organic_source,
          directSource: arr[0].direct_source,
          referralSource: arr[0].referral_source,
          avgSessionTime: arr[0].avg_session_time,
          sessionsPerUser: arr[0].number_of_sessions_per_users,
          pagePerSession: arr[0].page_per_session,
        };
      });
    }
  }, [stateData.selectedValue, initData]);

  const updateDashboard = (event) => {
    const value = event.target.value;
    setData({
      ...stateData,
      selectedValue: value,
    });
  };
  const dataforD = chartData({
    labels: ["Sessions", "Average session time", "Pages per session"],
    data: [
      stateData.sessionsPerUser,
      stateData.avgSessionTime,
      stateData.pagePerSession,
    ],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: true,
    },
    scale: d3.interpolatePurples,
    dataLabel: "data for doughnut chart",
  });

  const dataforB = chartData({
    labels: ["organic_source", "refrerral_source", "direct_source"],
    data: [
      stateData.organicSource,
      stateData.referralSource,
      stateData.directSource,
    ],
    colorRangeInfo: {
      colorStart: 0,
      colorEnd: 1,
      useEndAsStart: true,
    },
    scale: d3.interpolatePurples,
    dataLabel: "data for doughnut chart",
  });

  // <--------------- components here --------------->

  if (initData.items.length === 0) {
    return <h1>Fectching data</h1>;
  } else {
    return (
      <div className={styles.App}>
        <h1>Welcome to my dashboard</h1>
        <ControlledOpenSelect
          updateDashboard={updateDashboard}
          data={initData.DropDownList}
        />

        {/* <--------------- Widgets ---------------> */}
        <div className={styles.widget}>
          <Widget data={stateData} />
        </div>

        {/* <--------------- Charts ---------------> */}
        <div className={styles.chart}>
          <BarChart data={dataforB} width={100} height={50} />
          <DoughnutChart data={dataforD} width={100} height={50} />
        </div>
      </div>
    );
  }
};

export default App;
