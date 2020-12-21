const config = {
  apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
  spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg",
};
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

export const fetchData = () => {
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
    })
    .catch((error) => console.log(error));
  return [rows, dropDownList];
};
