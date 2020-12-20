# React dashboard

## Reuseable dashboard for React using React Chartjs2 and Material UI

### ChartData
`chartData()` returns data object which we can then pass to any Chart component. This function accepts a data object which contains `labels`,`colorRangeInfo`, `scale`, `dataLabel` 

    chartData({
        labels: ["China", "UAE", "Yemen", "Pakistan", "Saudia"],
        colorRangeInfo: {
        colorStart: 0,
        colorEnd: 1,
        useEndAsStart: false,
        },
        scale: d3.interpolateBlues,
        dataLabel: "data for doughnut chart",
    })

**Labels :** accepts list of data labels which will be displayed as labels.

**colorRangeInfo() :** accepts object containing d3 chromoatic color range (0,1) `useEndAsStart : true` will reverse the color range.

    const colorRangeInfo = {
        colorStart: 0,
        colorEnd: 1,
        useEndAsStart: false,
    };
