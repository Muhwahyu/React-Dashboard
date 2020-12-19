const randomValue = () => Math.floor(Math.random() * 16777215).toString(16);
const labels = ["China", "UAE", "Yemen", "Pakistan", "Saudia", "USA", "Turkey"];
let randomColor = labels.map(() => `#${randomValue()}`);
// console.log(backgroundColor);
export const chartData = {
  labels: labels,
  datasets: [
    {
      label: "Value",
      data: [120, 390, 500, 205, 122, 300, 350],
      backgroundColor: randomColor,
      borderColor: randomColor,
      borderWidth: 1,
    },
  ],
};
