
function p(n) {
  if (n < 1) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n == 3) {
    return 4;
  } else {
    return p(n - 1) + p(n - 2) + p(n - 3);
  }
}

/*
function p(n) {
  console.log("calculating p(" + n + ")");
  let ans = 0;
  if (n == 1) {
    ans = 1;
  } else if (n == 2) {
    ans = 2;
  } else if (n == 3) {
    ans = 4;
  } else if (n > 3) {
    ans = p(n - 1) + p(n - 2) + p(n - 3);
  }
  console.log("p(" + n + ") = " + ans);
  return ans;
}
*/

let valueN = 1;

function updateValueN(n) {
  reset();
  if (n < 1 || n > 100 || Math.round(n) != n) {
    alert("Value of n must be an integer between 1 and 100");
    document.getElementById("nInput").value = valueN;
  } else {
    valueN = n;
  }
}

function runTestCase() {
  let answer = p(valueN);
  document.getElementById("answer").innerHTML = "p(" + valueN + ") = " + answer;
  document.getElementById("answer").setAttribute("class", "answer");
  document.getElementById("runTestCase").innerHTML = "Reset";
  document.getElementById("runTestCase").setAttribute("onclick", "resetAll()");
}

let minN = 1;
let maxN = 30;
let numEachN = 10;
let avgsOnly = true;

let charts = [];
        
function updateMinN(min) {
  reset();
  if (min < 1 || min > 100 || Math.round(min) != min) {
    alert("Minimum value of n must be an integer between 1 and 100");
    document.getElementById("minInput").value = minN;
  } else {
    minN = min;
  }
}

function updateMaxN(max) {
  reset();
  if (max < 1 || max > 100 || Math.round(max) != max) {
    alert("Maximum value of n must be an integer between 1 and 100");
    document.getElementById("maxInput").value = maxN;
  } else if (max < minN) {
    alert("Maximum value of n must not be below minimum value of n");
    document.getElementById("maxInput").value = maxN;
  } else {
    maxN = max;
  }
}

function updateNumEachN(num) {
  reset();
  if (num < 1 || num > 1000 || Math.round(num) != num) {
    alert("Number of tests for each value of n must be an integer between 1 and 1,000");
    document.getElementById("numEach").value = numEachN;
  } else {
    numEachN = num;
  }
}

function updateAvgsOnly(str) {
  reset();
  avgsOnly = str == "Yes";
}

function round(n) {
  return Math.round(n * 10000) / 10000;
}

function createChart(id, title, dataArray) {
  let chart = new CanvasJS.Chart(id, {
      title: {
        text: title
      },
      axisX: {
        title: "Value of n",
        valueFormatString: "#,###"
      },
      axisY: {
        title: "Average runtime (ms)"
      },
      toolTip: {
        shared: true
      },
      legend: {
        cursor: "pointer",
        verticalAlign: "top",
        horizontalAlign: "center",
        dockInsidePlotArea: true,
      },
      data: dataArray
  });
  return chart;
}

function createChartDataObject(name, color, dataPointsArr) {
  let dataObject = {
    type: "line",
    name: name,
    showInLegend: true,
    color: color,
    lineColor: color,
    markerSize: 0,
    yValueFormatString: "#,###.00",
    dataPoints: dataPointsArr
  };
  return dataObject;
}

function drawChart(id, chart) {
  document.getElementById(id).setAttribute("class", "chart");
  chart.render();
  document.getElementById(id+"Export").setAttribute("class", "exportButton");
  document.getElementById(id+"Export").setAttribute("onclick", "exportChart(charts[0])");
}

function exportChart(chart) {
  chart.exportChart({format: "jpg"});
}


function reset() {
  document.getElementById("chart").innerHTML = "";
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("chartExport").setAttribute("class", "hidden");
  document.getElementById("chartExport").removeAttribute("onclick");

  document.getElementById("answer").innerHTML = "";
  document.getElementById("answer").setAttribute("class", "hidden");

  document.getElementById("csvLink").innerHTML = "";
  document.getElementById("csvLink").setAttribute("class", "hidden");

  document.getElementById("runTests").innerHTML = "Run tests";
  document.getElementById("runTests").setAttribute("onclick", "runTests()");
  
  document.getElementById("runTestCase").innerHTML = "Calculate p(n)";
  document.getElementById("runTestCase").setAttribute("onclick", "runTestCase()");

  document.getElementById("testCase").setAttribute("class", "flexColumn");
  document.getElementById("top").setAttribute("class", "flexColumn");
  document.getElementById("bottom").setAttribute("class", "flexColumn");
}

function resetAll() {
  reset();

  valueN = 1;
  minN = 1;
  maxN = 30;
  numEachN = 10;

  document.getElementById("nInput").value = valueN;
  document.getElementById("minInput").value = minN;
  document.getElementById("maxInput").value = maxN;
  document.getElementById("numEach").value = numEachN;
}


function runTests() {
  console.log("min: " + minN);
  console.log("max: " + maxN);
  console.log("num: " + numEachN);
  
  let rows = [["Test", "n", "p(n)", "Runtime (ms)"]];
  
  let testSizes = [];
  for (let i = parseInt(minN, 10); i <= maxN; i++) {
    testSizes.push(i);
  }
  console.log("values of n: " + testSizes);
  let totalNumTests = testSizes.length * numEachN;
  console.log("total num tests: " + totalNumTests);
  
  document.getElementById("runTests").innerHTML = "Running tests";
  alert(totalNumTests + " tests are about to be run for values of n up to " + maxN
        + ".\n\nThis may take some time, so please check the console for progress updates.");
  
  let currentTest = 1;
    
  for (let i = 0; i < testSizes.length; i++) {
    let n = testSizes[i];

    for (let j = 0; j < numEachN; j++) {

      let ts = performance.now();
      let ans = p(n);
      let te = performance.now();
      let t = round(te - ts);
      
      console.log("p(" + n + ") calculated to be " + ans + " in " + t + "ms");

      rows.push([currentTest, n, ans, t]);
      
      let message = "Completed " + currentTest + " of " + totalNumTests + " tests";
      console.log(message);

      currentTest++;
    }
  }
  
  document.getElementById("runTests").innerHTML = "Reset";
  document.getElementById("runTests").setAttribute("onclick", "resetAll()");

  let csvContent = "data:text/csv;charset=utf-8,";

  if (avgsOnly) {
    let avgRows = [["n", "Number of tests", "p(n)", "Avg runtime (ms)"]];
    for (let i = 0; i < testSizes.length; i++) {
      let subArr = rows.slice(1).slice(numEachN * i, numEachN * (i + 1));
      let totalsArr = subArr.reduce((x, y) => [testSizes[i], numEachN, x[2], x[3] + y[3]]);
      console.log(totalsArr);
      let avgsArr = totalsArr.map((x, i) => i < 3 ? x : round(x / numEachN));
      console.log(avgsArr);
      avgRows.push(avgsArr);
    }
    rows = avgRows.slice();
    
    let dataPointsArr = avgRows.slice(1).map(function getData(row) {
      return {
        x: row[0],
        y: row[3]
      };
    });
    let name = "p(n) average runtime";
    let color = "hsl(240, 50%, 50%)";
    let dataObject = createChartDataObject(name, color, dataPointsArr);
    let divisorsArr = dataPointsArr.filter(obj => obj.x >= maxN - 5).map(obj => Math.pow(2, obj.x) / obj.y);
    let divisor = Math.round(divisorsArr.reduce((x, y) => x + y) / divisorsArr.length);
    let compName = "1/" + divisor + " * 2^n";
    let compColor = color.replace("50%)", "85%)");
    let compDataPointsArr = testSizes.map(function (n) {
      return {
        x: n,
        y: round(Math.pow(2, n) / divisor)
      };
    });
    let compDataObject = createChartDataObject(compName, compColor, compDataPointsArr);
    let chart = createChart("chart", "p(n) Algorithm Runtimes", [dataObject, compDataObject]);
    charts[0] = chart;
    drawChart("chart", chart);

    document.getElementById("testCase").setAttribute("class", "hidden");
    document.getElementById("top").setAttribute("class", "flexRow");
    document.getElementById("bottom").setAttribute("class", "flexRow");
  }

  for(let i = 0; i < rows.length; i++) {
      let row = rows[i].join(",");
      csvContent += row + "\r\n";
  }
  
  let encodedUri = encodeURI(csvContent);
  let link = document.getElementById("csvLink");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "test_data.csv");
  link.setAttribute("class", "button");
  link.innerHTML = "Download results as CSV";
}
