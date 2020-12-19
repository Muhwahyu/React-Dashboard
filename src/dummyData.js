import * as d3 from "d3-scale-chromatic";
import interpolateColors from "./chromaticColors";

// const randomValue = () => Math.floor(Math.random() * 16777215).toString(16);
const labels = [
  "China",
  "UAE",
  "Yemen",
  "Pakistan",
  "Saudia",
  "USA",
  "Turkey",
  "Azerbaijan",
];
// let randomColor = labels.map(() => `#${randomValue()}`);
// console.log(backgroundColor);

// chromatic color data
const dataLenght = labels.length;
const colorRangeInfo = {
  colorStart: 0,
  colorEnd: 1,
  useEndAsStart: false,
};
const colorScale = d3.interpolatePuRd;

const randomColor = interpolateColors(dataLenght, colorScale, colorRangeInfo);
export const chartData = {
  labels: labels,
  datasets: [
    {
      label: "Value",
      data: [120, 390, 500, 205, 122, 600, 350, 325],
      backgroundColor: randomColor,
      borderColor: randomColor,
      borderWidth: 1,
    },
  ],
};
