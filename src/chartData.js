import * as d3 from "d3-scale-chromatic";
import interpolateColors from "./chromaticColors";

export const chartData = (chartConfig) => {
  const { labels, colorRangeInfo, scale, dataLabel } = chartConfig;
  console.log(labels);

  // chromatic color data
  const dataLenght = labels.length;

  // sets d3 interpolate color range
  const colorScale = scale;

  const randomColor = interpolateColors(dataLenght, colorScale, colorRangeInfo);

  return {
    labels: labels,
    datasets: [
      {
        label: dataLabel,
        data: [120, 390, 500, 205, 122, 600, 350, 325],
        backgroundColor: randomColor,
        borderColor: randomColor,
        borderWidth: 1,
      },
    ],
  };
};
