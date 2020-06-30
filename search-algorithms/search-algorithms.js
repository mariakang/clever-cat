/*
Search Algorithms

This application defines two search functions: linear search and binary
search. Each function takes two arguments: N and x, and will try to find x
in the range 1 to N (inclusive). If a match is found, the number of guesses
is returned, otherwise false is returned.

For a given test size N, this application generates a random integer x
between 1 and N, and applies each of the search functions in turn to guess
x, recording the output (i.e. number of guesses required by each one).

The UI prompts the user to enter the minimum and maximum values of N,
the number of tests to run for each value of N, and whether or not to
report average numbers of guesses only. Starting with the minimum, the
values of N will go up in increments of powers of ten, up to the maximum
value of N.

Once all tests have finished running, the UI is updated to provide a link
to download the results as a CSV. If "Average number of guesses only" was
selected, the results will contain one row per value of N, and graphs of the
results will be drawn to the UI. Otherwise, the results will contain a row for
each individual test run.

Some additional console logging was used during development to test the
algorithms, but has since been commented out.

*/

/*
 Linear search
 
 Searches for an integer x in the range 1 to N inclusive, and returns the
 number of guesses made. Returns false if x is not in the range.
*/
function linearSearch(x, N) {
  console.log("x: " + x + ", N: " + N);
  let count = 0; // number of guesses
  let guess = 0;
  // starting at 1, increment guess by 1 each time until a match is found.
  while (guess <= N) {
    count++;
    guess++;
//    console.log("count: " + count + ", guess: " + guess);
    // if a match has been found, return the number of guesses
    if (guess == x) {
//      console.log("total guesses: " + count);
      return count;
    }
  }
  // if N has been reached but no match has been found, return false
  return false;
}

/*
 Binary search
 
 Searches for an integer x in the range 1 to N inclusive, and returns the
 number of guesses made. Returns false if x is not in the range.
*/
function binarySearch(x, N) {
  console.log("x: " + x + ", N: " + N);
  let min = 1; // minimum possible value
  let max = N; // maximum possible value
  let count = 0; // number of guesses
  while (min <= max) {
    count++;
    // pick the mid-point as a guess
    let guess = Math.floor((min + max) / 2);
//    console.log("count: " + count + ", guess: " + guess);
    // if it's a match, return the number of guesses
    if (guess == x) {
//      console.log("total guesses: " + count);
      return count;
    // if x is higher than the guess, then its minimum value is too  
    } else if (guess < x) {
      min = guess + 1;
    // if x is lower than the guess, then so is its maximum value  
    } else {
      max = guess - 1;
    }
  }
  // if the minimum value exceeds the maximum, then x is out of range
  return false;
}

/*
 Returns a random integer between 1 and N inclusive.
*/
function generateRandomX(N) {
  let x = Math.floor(Math.random() * N) + 1;
  console.log(x);
  return x;
}

/*
 Global variables
*/

let minN = 1000; // minimum value of N
let maxN = 100000; // maximum value of N
let numEachN = 100; // number of tests to run for each value of N
let avgsOnly = true; // if true, return average number of guesses for each N

let charts = []; // container to hold variables representing charts
 
/*
 Functions to update global variables, called by onChange events
*/

function updateMinN(min) {
  reset();
  if (min < 1 || min > 1000000 || Math.round(min) != min) {
    alert("Minimum value of N must be an integer between 1 and 1,000,000");
    document.getElementById("minInput").value = minN;
  } else {
    minN = min;
  }
}

function updateMaxN(max) {
  reset();
  if (max < 1 || max > 1000000 || Math.round(max) != max) {
    alert("Maximum value of N must be an integer between 1 and 1,000,000");
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
  if (num < 1 || num > 10000 || Math.round(num) != num) {
    alert("Number of tests for each value of N must be an integer between 1 and 10,000");
    document.getElementById("numEach").value = numEachN;
  } else {
    numEachN = num;
  }
}

function updateAvgsOnly(str) {
  reset();
  avgsOnly = str == "Yes";
}

/*
 Returns a chart object using the CanvasJS API.
 
 id: id of the HTML element in which to draw the chart
 title: chart title
 dataArray: array of chart data objects
*/
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

/*
 Returns a chart data object.
 
 An array of chart data objects is required to create a
 chart object using the CanvasJS API.
 
 name: name of line graph, to appear in legend
 color: color of line and tooltip text
 dataPointsArray: array of (x, y) value pair objects
*/
function createChartDataObject(name, color, dataPointsArr) {
  let dataObject = {
    type: "line",
    name: name,
    showInLegend: true,
    color: color,
    lineColor: color,
    markerSize: 0,
    yValueFormatString: "#,###",
    dataPoints: dataPointsArr
  };
  return dataObject;  
}

/*
 Renders a chart object created using the CanvasJS API.
 
 id: id of the HTML element against which to render the chart
 chart: chart object
 */
function drawChart(id, chart) {
  document.getElementById(id).setAttribute("class", "chart");
  chart.render();
  document.getElementById(id+"Export").setAttribute("class", "exportButton");
  document.getElementById(id+"Export").setAttribute("onclick", "exportChart(charts[" + id.replace("chart", "") + "])");
}

/*
 Exports a chart object as a jpg.
 
 Function to be called by an onClick button event.
*/
function exportChart(chart) {
  chart.exportChart({format: "jpg"});
}

/*
 Resets the UI
*/
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

/*
 Resets the UI and non-select global variables
*/
function resetAll() {
  reset();

  minN = 1000;
  maxN = 100000;
  numEachN = 100;

  document.getElementById("minInput").value = minN;
  document.getElementById("maxInput").value = maxN;
  document.getElementById("numEach").value = numEachN;
}

/*
 Runs the tests, creates a CSV export of the results, and draws charts to the UI.
*/
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

  if (avgsOnly) {
    let avgRows = [["N", "Number of tests", "Linear search", "Binary search"]];
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
    let lineColors = ["hsl(240, 50%, 50%)", "hsl(0, 100%, 50%)"];
    let compNames = ["N / 2", "log2(N)"];
    let compDataArrs = [
      testSizes.map(function getHalf(N) {
        return {
          x: N,
          y: N / 2
        };
      }),
      testSizes.map(function getlog2(N) {
        return {
          x: N,
          y: Math.log2(N)
        };
      })
    ];
    
    for (let s = 1; s <= 2; s++) {
      let name = avgRows[0][s + 1];
      let color = lineColors[s - 1];
      let dataPointsArr = avgRows.slice(1).map(function getData(row) {
        return {
          x: row[0],
          y: row[s + 1]
        };
      });
      let dataObject = createChartDataObject(name, color, dataPointsArr);
      chartData.push(dataObject);
      let compName = compNames[s - 1];
      let compColor = color.replace("50%)", "85%)");
      let compDataPointsArr = compDataArrs[s - 1];
      let compDataObject = createChartDataObject(compName, compColor, compDataPointsArr);
      let chart = createChart("chart" + s, name, [dataObject, compDataObject]);
      charts[s] = chart;
      drawChart("chart" + s, chart); 
    }
    console.log(JSON.stringify(chartData));
    let chart0 = createChart("chart0", "Linear and Binary Search Algorithms", chartData);
    charts[0] = chart0;
    drawChart("chart0", chart0);

    document.getElementById("top").setAttribute("class", "flexRow");
    document.getElementById("bottom").setAttribute("class", "flexRow");
  }

  let csvContent = "data:text/csv;charset=utf-8,";

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
