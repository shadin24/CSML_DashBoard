const chart1_2_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 14,
        padding: 20,
        fontColor: "#9a9a9a",
      },
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9a9a9a",
      },
    }],
  },
};

const chart3_4_options = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },

  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(29,140,248,0.0)",
        zeroLineColor: "transparent",
      },
      ticks: {
        suggestedMin: 50,
        suggestedMax: 125,
        padding: 20,
        fontColor: "#9e9e9e",
      },
    }],
    xAxes: [{
      barPercentage: 1.6,
      gridLines: {
        drawBorder: false,
        color: "rgba(0,242,195,0.1)",
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e",
      },
    }],
  },
};

function generateDataset1(canvas, data) {
  let ctx = canvas.getContext("2d");

  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
  gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

  return {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    datasets: [{
      label: "Data",
      fill: true,
      backgroundColor: gradientStroke,
      borderColor: "#1f8ef1",
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: "#1f8ef1",
      pointBorderColor: "rgba(255,255,255,0)",
      pointHoverBackgroundColor: "#1f8ef1",
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: data,
    }],
  };
}

async function fetchChartData() {
  try {
    const response = await fetch('https://air-backend-yesb.onrender.com/');
    const responseData = await response.json(); // Get response as JSON

    // Extract values into separate arrays
    const pm1Values = Object.values(responseData).map(entry => parseInt(entry.Pm1));
    const pm2Values = Object.values(responseData).map(entry => parseInt(entry.pm2));
    const pm10Values = Object.values(responseData).map(entry => parseInt(entry.pm10));
    const no2Values = Object.values(responseData).map(entry => parseInt(entry.no2));
    
    // Return an object containing arrays of PM1, PM10, and NO2 values
    return {
      pm2Values: pm2Values,
      pm1Values: pm1Values,
      pm10Values: pm10Values,
      no2Values: no2Values
    };

  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
}

async function fetchAdafruitData() {
  try {
    const response = await fetch('https://io.adafruit.com/api/v2/CSML/feeds/', {
      headers: {
        'X-AIO-Key': 'aio_vHGl47vN153xj2WTy8vMpATrsz5A'
      }
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching Adafruit data:', error);
    throw error;
  }
}

const adafruitData = await fetchAdafruitData();
console.log('Adafruit data:', adafruitData);

const chartData = await fetchChartData();
console.log('Chart data:', chartData);

function generateDataset2(canvas, data) {
  let ctx = canvas.getContext("2d");

  let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
  gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
  gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

  return {
    labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
    datasets: [{
      label: "Deviation Data",
      fill: true,
      backgroundColor: gradientStroke,
      borderColor: "#00d6b4",
      borderWidth: 2,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: "#00d6b4",
      pointBorderColor: "rgba(255,255,255,0)",
      pointHoverBackgroundColor: "#00d6b4",
      pointBorderWidth: 20,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 15,
      pointRadius: 4,
      data: data,
    }],
  };
}

function findSuccessiveDifferences(arr) {
  let differences = [];
  for (let i = 0; i < arr.length - 1; i++) {
    differences.push(arr[i + 1] - arr[i]);
  }
  return differences;
}

let chartExample1 = {
  data1: (canvas) => generateDataset1(canvas, chartData.pm2Values),
  data2: (canvas) => generateDataset1(canvas, chartData.pm10Values),
  data3: (canvas) => generateDataset1(canvas, chartData.pm1Values),
  data4: (canvas) => generateDataset1(canvas, chartData.no2Values),
  // data5: (canvas) => generateDataset1(canvas, chartData.No2values),
  options: chart1_2_options,
}; // Initialize chartExample1

export { chartExample1, chartData };
