/*
 Recursive algorithm
 
 This application defines a recursive function p(n) to calculate
 the number of parking arrangements for a street with n spaces.
 All n spaces must be taken up, and there are three possible
 vehicle types: a motorcycle takes up 1 space, a car 2 spaces, and
 a van 3 spaces.
 
 The application has two sections: the first calculates p(n) for a
 specified value of n and displays the result, and the second
 calculates p(n) for multiple values of n and returns the runtimes.
 
 The UI prompts the user to enter the minimum and maximum values of
 n, the number of tests to run for each value of n, and whether or
 not to report average runtimes only.

 Once all tests have finished running, the UI is updated to provide
 a link to download the results as a CSV. If "Average runtimes only"
 was selected, the results will contain one row per value of n, and
 a graph of the results will be drawn to the UI. Otherwise, the
 results will contain a row for each individual test run.
 
 Some console logging was used during development to test the code,
 but has since been commented out.


 Logic
 
 Given a value n, if n < 1 then no arrangements are possible.
 If n = 1, then the only arrangement is a single motorcycle (M).
 If n = 2, then there are 2 arrangements: 2 motorcycles or a car
 (MM, C). If n = 3, then there are 4 arrangements: 3 motorcycles,
 a car and a motorcycle, or a van (MMM, MC, CM, V).
 
 If n > 3, then the first vehicle in the arrangement must be a
 motorcycle, a car or a van. If it's a motorcycle, then there are
 (n - 1) spaces left, which can have p(n - 1) possible arrangements,
 so there are p(n - 1) possible arrangements if the first vehicle
 is a motorcycle. Similarly, there are p(n - 2) arrangements if
 the first vehicle is a car, and p(n - 3) arrangements if it's a
 van. Therefore, for n > 3, p(n) = p(n - 1) + p(n - 2) + p(n - 3).

/*
 Returns p(n), the number of parking arrangements for n spaces.
 
 Uses a recursive method.
*/
function p(n) {
  // base cases, i.e. n <= 3
  if (n < 1) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 2;
  } else if (n == 3) {
    return 4;
  // for n > 3, use recursion
  } else {
    return p(n - 1) + p(n - 2) + p(n - 3);
  }
}

/*
 Returns p(n), the number of parking arrangements for n spaces.
 
 Uses an iterative (faster) method. Used to verify the results
 of the recursive method.
*/
function iterativeP(n) {
  // for n = 0 to n, calculate p(n), add the value to an array,
  // and then return the last element of the array
  let array = [0, 1, 2, 4]; // initialise the array with base cases
  // for n > 3, calculate p(n) from previous array members
  for (let i = 4; i <= n; i++) {
    let p = array[i - 3] + array[i - 2] + array[i - 1];
    array.push(p);
  }
  return array[n];
}

/*
 First ("test case") section to display p(n) for a single input
 value of n.
*/

let valueN = 1; // global variable to store current value of n

// updates global variable, called by onChange event
function updateValueN(n) {
  reset();
  if (n < 1 || n > 100 || Math.round(n) != n) {
    alert("Value of n must be an integer between 1 and 100");
    document.getElementById("nInput").value = valueN;
  } else {
    valueN = n;
  }
}

// calculates p(n) and displays it in the UI
function runTestCase() {
  let recursive = p(valueN);
  let iterative = iterativeP(valueN);
  let message = "Recursive method: p(" + valueN + ") = " + recursive + "<br/>"
    + "Iterative method: p(" + valueN + ") = " + iterative;
  document.getElementById("answer").innerHTML = message;
  document.getElementById("answer").setAttribute("class", "answer"); // unhide element
  // change behaviour of button
  document.getElementById("runTestCase").innerHTML = "Reset";
  document.getElementById("runTestCase").setAttribute("onclick", "resetAll()");
}

/*
 Second ("runtimes") section to record runtimes of function p(n)
 for multiple values of n.
*/

/*
 Global variables
*/
let minN = 1; // minimum value of n
let maxN = 30; // maximum value of n
let numEachN = 10; // number of tests to run for each value of n
let avgsOnly = true; // if true, only average runtimes will be reported

let charts = []; // container to hold variables representing charts
        
/*
 Functions to update global variables, called by onChange events
*/

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


/*
 Utility function rounds a number to 4 decimal places
*/
function round(n) {
  return Math.round(n * 10000) / 10000;
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
    yValueFormatString: "#,###.00",
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
  document.getElementById(id+"Export").setAttribute("onclick", "exportChart(charts[0])");
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

/*
 Resets the UI and all non-select variables
*/
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

/*
 Runs the tests, creates a CSV export of the results, and draws a chart to the UI.
*/
function runTests() {
  console.log("min: " + minN);
  console.log("max: " + maxN);
  console.log("num: " + numEachN);
  
  // initialise an array of arrays to hold the results:
  // each member array represents a row, the first row contains the headings
  let rows = [["Test", "n", "p(n)", "Runtime (ms)"]];
  
  // generate an array containing the different test sizes (values of n)
  let testSizes = [];
  // increment the test sizes by 1
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
    
  // for each value of n, run function p(n) numEachN times
  for (let i = 0; i < testSizes.length; i++) {
    let n = testSizes[i];

    for (let j = 0; j < numEachN; j++) {

      let ts = performance.now();
      let ans = p(n);
      let te = performance.now();
      let t = round(te - ts); // runtime of p(n), rounded to 4 d.p.
      
      console.log("p(" + n + ") calculated to be " + ans + " in " + t + "ms");

      // add the test number, test size, value of p(n) and runtime to the results array
      rows.push([currentTest, n, ans, t]);
      
      let message = "Completed " + currentTest + " of " + totalNumTests + " tests";
      console.log(message);

      currentTest++;
    }
  }
  
  // change the behaviour of the "run tests" button to reset the page
  document.getElementById("runTests").innerHTML = "Reset";
  document.getElementById("runTests").setAttribute("onclick", "resetAll()");

  // if averages only has been set to true, then aggregate the results and draw charts
  if (avgsOnly) {
    // create a new results array of arrays with new headings
    let avgRows = [["n", "Number of tests", "p(n)", "Avg runtime (ms)"]];
    // for each test size, find the portion of the results array relating to it
    for (let i = 0; i < testSizes.length; i++) {
      let subArr = rows.slice(1).slice(numEachN * i, numEachN * (i + 1));
      // aggregate the arrays into a single array containing the totals
      let totalsArr = subArr.reduce((x, y) => [testSizes[i], numEachN, x[2], x[3] + y[3]]);
//      console.log(totalsArr);
      // convert the totals into averages
      let avgsArr = totalsArr.map((x, i) => i < 3 ? x : round(x / numEachN));
//      console.log(avgsArr);
      // add the new row array to the results array
      avgRows.push(avgsArr);
    }
    // replace the original results array (of arrays) with this new array (of arrays)
    rows = avgRows.slice();
    
    // draw a chart with two line graphs: one of the runtimes, and the other a comparison formula

    // map each row in the results array to an (x, y) data point object,
    // where x is the test size (n) and y is the average runtime
    let dataPointsArr = avgRows.slice(1).map(function getData(row) {
      return {
        x: row[0],
        y: row[3]
      };
    });
    let name = "p(n) average runtime";
    let color = "hsl(240, 50%, 50%)"; // line and tooltip colour
    let dataObject = createChartDataObject(name, color, dataPointsArr); // chart data object
    // calculate an appropriate scaling factor to use for the comparison graph
    let divisorsArr = dataPointsArr.filter(obj => obj.x >= maxN - 5).map(obj => Math.pow(3, obj.x / 2) / obj.y);
    let divisor = Math.round(divisorsArr.reduce((x, y) => x + y) / divisorsArr.length); // scaling factor
    // "comp" stands for comparison
    let compName = "1/" + divisor + " * 3^(n/2)";
    let compColor = color.replace("50%)", "85%)"); // lighter version of the line colour
    // map test sizes to a comparison data points array
    let compDataPointsArr = testSizes.map(function (n) {
      return {
        x: n,
        y: round(Math.pow(3, n / 2) / divisor)
      };
    });
    let compDataObject = createChartDataObject(compName, compColor, compDataPointsArr); // chart data object
    // create chart object
    let chart = createChart("chart", "p(n) Algorithm Runtimes", [dataObject, compDataObject]);
    charts[0] = chart; // add it to the global collection
    drawChart("chart", chart); // render it to the UI

    // hide the test case section and display the original input boxes in two rows
    document.getElementById("testCase").setAttribute("class", "hidden");
    document.getElementById("top").setAttribute("class", "flexRow");
    document.getElementById("bottom").setAttribute("class", "flexRow");
  }

  // create a CSV of the results
  let csvContent = "data:text/csv;charset=utf-8,";
  for(let i = 0; i < rows.length; i++) {
      let row = rows[i].join(","); // for each row array, create a string of comma-separated values
      csvContent += row + "\r\n"; // ensure each row string is on a new line
  }
  
  // create a link to download the CSV file
  let encodedUri = encodeURI(csvContent);
  let link = document.getElementById("csvLink"); // hidden HTML hyperlink element
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "test_data.csv"); // set the hyperlink to download the CSV
  link.setAttribute("class", "button"); // unhide the HTML element and style it as a button
  link.innerHTML = "Download results as CSV";
}
