function linearSearch(x, N) {
  console.log("x: " + x + ", N: " + N);
  if (x < 1 || x > N) {
    console.log("invalid inputs");
    return -1;
  }
  let count = 1;
  let guess = 1;
  while (guess != x) {
    count++;
    guess++;
//    console.log("count: " + count + ", guess: " + guess);
  }
//  console.log("total guesses: " + count);
  return count;
}

function binarySearch(x, N) {
  console.log("x: " + x + ", N: " + N);
  if (x < 1 || x > N) {
    console.log("invalid inputs");
    return -1;
  }
  let min = 1;
  let max = N;
  let count = 0;
  let loop = true;
  while (loop) {
    count++;
    guess = Math.floor((min + max) / 2);
//    console.log("count: " + count + ", guess: " + guess);
    if (guess == x) {
      loop = false;
    } else if (guess < x) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
//  console.log("total guesses: " + count);
  return count;
}

function generateRandomX(N) {
  let x = Math.floor(Math.random() * N) + 1;
  console.log(x);
  return x;
}

let minN = 1000;
let maxN = 100000;
let numEachN = 100;
let avgsOnly = true;

let charts = [];
        
function updateMinN(min) {
  reset();
  if (min < 1 || min > 1000000) {
    alert("Minimum value of N must be between 1 and 1,000,000");
    document.getElementById("minInput").value = minN;
  } else {
    minN = min;
  }
}

function updateMaxN(max) {
  reset();
  if (max < 1 || max > 1000000) {
    alert("Maximum value of N must be between 1 and 1,000,000");
    document.getElementById("maxInput").value = maxN;
  } else if (max < minN) {
    alert("Maximum value of N must not be below minimum value of N");
    document.getElementById("maxInput").value = maxN;
  } else {
    maxN = max;
  }
}

function updateNumEachN(num) {
  reset();
  if (num < 1 || num > 10000) {
    alert("Number of tests for each value of N must be between 1 and 10,000");
    document.getElementById("numEach").value = numEachN;
  } else {
    numEachN = num;
  }
}

function updateAvgsOnly(str) {
  reset();
  avgsOnly = str == "Yes";
}

function createChart(id, title, dataArray) {
  let chart = new CanvasJS.Chart(id, {
      title: {
        text: title
      },
      axisX: {
        title: "Value of N",
        valueFormatString: "#,###"
      },
      axisY: {
        title: "Average number of guesses"
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

function drawChart(id, chart) {
  document.getElementById(id).setAttribute("class", "chart");
  chart.render();
  document.getElementById(id+"Export").setAttribute("class", "exportButton");
  document.getElementById(id+"Export").setAttribute("onclick", "exportChart(charts[" + id.replace("chart", "") + "])");
}

function exportChart(chart) {
  chart.exportChart({format: "jpg"});
}

function reset() {
  for (let i = 0; i <= 2; i++) {
    document.getElementById("chart" + i).innerHTML = "";
    document.getElementById("chart" + i).setAttribute("class", "hidden");
    document.getElementById("chart" + i + "Export").setAttribute("class", "hidden");
    document.getElementById("chart" + i + "Export").removeAttribute("onclick");
  }
  document.getElementById("csvLink").innerHTML = "";
  document.getElementById("csvLink").setAttribute("class", "hidden");

  document.getElementById("runTests").innerHTML = "Run tests";
  document.getElementById("runTests").setAttribute("onclick", "runTests()");
  
  document.getElementById("top").setAttribute("class", "flexColumn");
  document.getElementById("bottom").setAttribute("class", "flexColumn");
}

function resetAll() {
  reset();

  minN = 1000;
  maxN = 100000;
  numEachN = 100;

  document.getElementById("minInput").value = minN;
  document.getElementById("maxInput").value = maxN;
  document.getElementById("numEach").value = numEachN;
}


function runTests() {
  console.log("min: " + minN);
  console.log("max: " + maxN);
  console.log("num: " + numEachN);
  
  let rows = [["Test", "N", "Linear search", "Binary search"]];
  
  let testSizes = [];
  let increment = Math.pow(10, Math.floor(Math.log10(minN)));
  for (let x = parseInt(minN, 10); x <= maxN; x += increment) {
    testSizes.push(x);
    increment = Math.pow(10, Math.floor(Math.log10(x)));
  }
  console.log("values of N: " + testSizes);
  let totalNumTests = testSizes.length * numEachN;
  console.log("total num tests: " + totalNumTests);
  
  document.getElementById("runTests").innerHTML = "Running tests";
  alert(totalNumTests + " tests are about to be run for values of N up to " + maxN
        + ".\n\nThis may take some time, so please check the console for progress updates.");
  
  let currentTest = 1;
    
  for (let i = 0; i < testSizes.length; i++) {
    let N = testSizes[i];

    for (let j = 0; j < numEachN; j++) {
      let x = generateRandomX(N);
      console.log("N: " + N + ", x: " + x);
      
      console.log("Linear search...");

      let linRes = linearSearch(x, N);
      
      console.log("Linear search completed in " + linRes + " guesses.\nBinary search...");

      let binRes = binarySearch(x, N);

      console.log("Binary search completed in " + binRes + " guesses.");

      rows.push([currentTest, N, linRes, binRes]);
      
      let message = "Completed " + currentTest + " of " + totalNumTests + " tests";
      console.log(message);

      currentTest++;
    }
  }
  
  document.getElementById("runTests").innerHTML = "Reset";
  document.getElementById("runTests").setAttribute("onclick", "resetAll()");

  let csvContent = "data:text/csv;charset=utf-8,";

  if (avgsOnly) {
    let avgRows = [["N", "Number of tests", "Linear search", "Binary search"]];
    let lineColors = ["DarkBlue", "DarkRed", "DarkOliveGreen"];
    for (let i = 0; i < testSizes.length; i++) {
      let subArr = rows.slice(1).slice(numEachN * i, numEachN * (i + 1));
      let totalsArr = subArr.reduce((x, y) => [testSizes[i], numEachN, x[2] + y[2], x[3] + y[3]]);
      console.log(totalsArr);
      let avgsArr = totalsArr.map((x, i) => i < 2 ? x : Math.round(x / numEachN));
      console.log(avgsArr);
      avgRows.push(avgsArr);
    }
    rows = avgRows.slice();
    
    let chartData = [];
    
    for (let s = 1; s <= 2; s++) {
      let name = avgRows[0][s + 1];
      let dataSet = {
        type: "line",
        name: name,
        showInLegend: true,
        color: lineColors[s - 1],
        lineColor: lineColors[s - 1],
        markerSize: 0,
        yValueFormatString: "#,###",
        dataPoints: avgRows.slice(1).map(function getData(row) {
          return {
            x: row[0],
            y: row[s + 1]
          };
        })
      };
      chartData.push(dataSet);
    }
    console.log(JSON.stringify(chartData));
    let chart0 = createChart("chart0", "Linear and Binary Search Algorithms", chartData);
    charts[0] = chart0;
    drawChart("chart0", chart0);

    let chart1 = createChart("chart1", "Linear Search", chartData[0]);
    charts[1] = chart1;
    drawChart("chart1", chart1);
    
    let chart2Data = chartData[1];
    let chart2 = createChart("chart1", "Linear Search", chart2Data);
    charts[2] = chart2;
    drawChart("chart2", chart2);
    
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
