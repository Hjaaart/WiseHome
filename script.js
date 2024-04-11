const radiator = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("radiator"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

const varme = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("varme"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

const elektricitet = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("elektricitet"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

const luftf = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("luftf"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

const kvand = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("kvand"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

const vvand = {
  // Container: HTML Element to hold the chart
  container: document.getElementById("vvand"),
  // Data: Data to be displayed in the chart
  data: [
    { day: "Fre", value: 162000 },
    { day: "Lør", value: 302000 },
    { day: "Søn", value: 800000 },
    { day: "Man", value: 1254000 },
    { day: "Tir", value: 950000 },
    { day: "Ons", value: 200000 },
  ],
  // Series: Defines which chart type and data to use
  series: [{ type: "line", xKey: "day", yKey: "value" }],
};

// Create Chart
const chartRadiator = agCharts.AgCharts.create(radiator);
const chartVarme = agCharts.AgCharts.create(varme);
const chartKvand = agCharts.AgCharts.create(kvand);
const chartVvand = agCharts.AgCharts.create(vvand);
const chartElektricitet = agCharts.AgCharts.create(elektricitet);
const chartKLuftf = agCharts.AgCharts.create(luftf);
