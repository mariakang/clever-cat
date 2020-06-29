/* 
Sorting Algorithms

This application defines five sorting functions: bubble sort, insertion
sort, selection sort, merge sort and shell sort. For a given test size n,
it generates an array containing n randomly-generated integers and then
applies each of the sorting functions in turn, measuring their runtimes.
Since each function returns a copy of the input array, this means that
each time the test is run, all of the sorting functions are given the same
test array to sort.

The UI prompts the user to enter the minimum and maximum array input
sizes, the number of tests to run for each size, whether or not to report
average runtimes only, and whether or not to use "mostly sorted" test
arrays. Starting with the minimum, the test sizes will go up in increments
of powers of ten, up to the maximum test size.

Once all tests have finished running, the UI is updated to provide a link
to download the results as a CSV. If "Average runtimes only" was selected,
the results will contain one row per test size, and graphs of the results
will be drawn to the UI. Otherwise, the results will contain a row for
each individual test array.

Due to their size, the sorted arrays are not output to the CSV or console.
Some console logging was used during development to test the algorithms,
but has since been commented out.

*/

/* 
 Bubble sort

 Returns a copy of the input array, sorted in ascending order.
*/
function bubbleSort(arr) {
  // take a copy of the array
  let a = arr.slice();
  let loop = true;
  // Loop through the array, swapping pairs of adjacent elements if
  // not in ascending order. Keep looping through the array until
  // the number of swaps made is zero, indicating that the array
  // is now in ascending order.
  while (loop) {
    let swaps = 0;
    // loop over the array
    for (let i = 0; i < a.length - 1; i++) {
      // the first value in the pair:
      let val = a[i];
      // the second value in the pair:
      let nextVal = a[i + 1];
      // if the pair are out of order, swap them and count the swap
      if (val > nextVal) {
        a[i] = nextVal;
        a[i + 1] = val;
        swaps += 1;
      }
    }
    // check the number of swaps made for this loop; if non-zero, loop again
    loop = swaps > 0;
//    console.log(a);
  }
  // return the sorted array
  return a;
}

/* 
 Insertion sort

 Returns a copy of the input array, sorted in ascending order.
*/
function insertionSort(arr) {
  // take a copy of the array
  let a = arr.slice();
  // starting at the second element, loop through the array
  for (let i = 1; i < a.length; i++) {
    // this element's value:
    let val = a[i];

   let j = i;
    // work backwards through the array, shifting the elements 
    // up if higher than this element, and insert this element 
    // at the correct position
    while (j >= 1 && a[j - 1] > val) {
      a[j] = a[j - 1];
      j--;
    }
    a[j] = val;
//    console.log(a);
  }
  // return the sorted array
  return a;
}

/* 
 Selection sort

 Returns a copy of the input array, sorted in ascending order.
*/
function selectionSort(arr) {
  // take a copy of the array
  let a = arr.slice();
  // Starting at 0, for each index i of the array, find the
  // minimum value in the subarray from i to the end, and swap
  // it with the element at position i. The subarray from 0 to
  // i will therefore be sorted in ascending order.
  for (let i = 0; i < a.length - 1; i++) {
    // store value of element at position i for later
    let val = a[i];
    // loop through the subarray, looking for the minimum value
    // and its index
    let min = a[i]; // assume it's the first element
    let minIndex = i; // remember its index
    for (let j = i + 1; j < a.length; j++) {
      // if any subsequent element is lower, it becomes the new
      // minimum
      if (a[j] < min) {
        min = a[j];
        minIndex = j;
      }
    }
    // swap the element at i with the minimum found
    a[i] = min;
    a[minIndex] = val;
//    console.log(a);
  }
  // return the sorted array
  return a;
}

/* 
 Merge sort

 Returns a copy of the input array, sorted in ascending order.
*/
function mergeSort(arr) {
 // helper function to merge two sorted arrays into a single sorted
 // array
  function merge (left, right) {
    let ret = []; // initialise the array to be returned
    // create two pointers to move over the two arrays
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      // compare the elements at the pointers; copy the lower of them
      // into the return array and move that pointer forward
      if (left[leftIndex] < right[rightIndex]) {
        ret.push(left[leftIndex]);
        leftIndex++;
      } else {
        ret.push(right[rightIndex]);
        rightIndex++;
      }
    }
    // one of the two pointers will be pointing at the last element
    // which needs to be copied in
    return ret
          .concat(left.slice(leftIndex)) // (won't do anything if index = length)
          .concat(right.slice(rightIndex));
  }

  // take a copy of the array
  let a = arr.slice();
  // if empty or containing one element, the array is sorted
  if (a.length < 2) {
    return a;
  }
  // otherwise, split the array into two subarrays
  let mid = Math.floor(a.length / 2);
  let left = a.slice(0, mid);
  let right = a.slice(mid);
  // sort each subarray recursively and merge into a single array
  // using the helper function above
  a = merge(mergeSort(left),mergeSort(right));
//  console.log(a);
  // return the sorted array
  return a;
}

/*
 Returns an array of integers to be used as "gaps" when shell sort
 is used to sort an array of the input size.
 
 The first gap is half of the array size, and subsequent gaps are
 obtained by dividing the previous gap by 2, until a final gap of
 1 is reached.
*/
function getGaps(arrSize) {
  let gaps = [Math.floor(arrSize / 2)];
  while (gaps.indexOf(1) == -1) {
    let gap = Math.floor(gaps[gaps.length - 1] / 2);
    gaps.push(gap);
  }
  return gaps;
//  console.log(gaps);
}

/* 
 Shell sort

 Returns a copy of the input array, sorted in ascending order.
 Uses the input gaps array to implement the shell sort algorithm.
*/
function shellSort(arr, gapsArr) {
  // take a copy of the array
  let a = arr.slice();
  // if empty or containing one element, the array is sorted
  if (a.length < 2) {
    return a;
  }
  // for each gap in the gaps array 
  for (let i = 0; i < gapsArr.length; i++) {
    let gap = gapsArr[i];
    // starting at index "gap", iterate over the array
    for (let j = gap; j < a.length; j++) {
      // value of this element
      let val = a[j];
      // move back through the array, in increments of "gap",
      // shifting the elements up if higher than this element,
      // and insert this element at the correct position
      let k = j;
      while (k >= gap && a[k - gap] > val) {
        a[k] = a[k - gap];
        k -= gap;
      }
      a[k] = val;
    }
//    console.log(a);
  }
  // return the sorted array
  return a;
}

/*
 Returns an array of size len, containing random integers between 0 and (10 x len).
*/
function generateRandomTestData(len) {
  let a = [];
  for (let i = 0; i < len; i++) {
    a.push(Math.round(Math.random() * len * 10));
  }
//  console.log(a);
  return a;
}

/*
 Returns an array of size len, containing integers from 0 to (len - 1),
 sorted in ascending order.
*/
function generateSortedTestData(len) {
  let a = [];
  for (let i = 0; i < len; i++) {
    a.push(i);
  }
//  console.log(a);
  return a;
}

/*
 Returns an array of size len, containing integers from 0 to (len - 1),
 sorted mostly in ascending order, but with approximately 7% of elements
 in the wrong position.
*/
function generateMostlySortedTestData(len) {
  // start off with a sorted array of integers from 0 (inclusive) to len (exclusive)
  let a = generateSortedTestData(len);
  // set the number of elements to be misplaced to be 7% of len, rounded down
  let numChanges = Math.floor(len * 7 / 100);

  // choose indices of elements to be misplaced, ensuring:
  // - no repetitions; and
  // - not to include the last element of the sorted array (to simplify algorithm)
  let indices = a.slice(0, -1); // available indices for selection
  let changes = []; // indices chosen for misplacement
  
  // populate changes array with required number of indices
  for (let i = 0; i < numChanges; i++) {
    // get random element from available indices
    let rand = Math.round(Math.random() * indices.length);
    // remove element at index 'rand' from available indices
    // and add it to changes array
    changes = changes.concat(indices.splice(rand, 1));
  }
 // For each index in the changes array, replace the element at
  // that index with the one at the next index in the changes array
  // (the indices in the changes array will be unsorted).
  // Replace the element at the last index in the changes array
  // with the one at the first index in the changes array.
  let temp = a[changes[0]];
  for (let i = 0; i < numChanges - 1; i++) {
    a[changes[i]] = a[changes[i + 1]];
  }
  a[changes[numChanges - 1]] = temp;
/*
  // OR For each index in the changes array, swap the element at
  // that index with the following element (the last element won't
  // be chosen for replacement as its index has been excluded).
  // This method leaves data 'more sorted' than the previous one.
  for (let i = 0; i < numChanges; i++) {
    let index = changes[i];
    let temp = a[index];
    a[index] = a[index + 1];
    a[index + 1] = temp;
  }
*/
//  console.log(a);
  return a;
}

/*
 Global variables
*/

let minSize = 1000; // minimum test array size
let maxSize = 10000; // maximum test array size
let numEachSize = 5; // number of tests to run for each size
let avgsOnly = true; // if true, only average runtimes will be reported
let mostlySorted = false; // if true, "mostly sorted" data will be used

let charts = []; // container to hold variables representing charts

/*
 Returns an array of size len.
 
 If mostlySorted is set to true, then this is the output of the
 generateMostlySortedTestData function, otherwise it's the output of
 the generateRandomTestData function.
*/
function generateTestData(len) {
  if (mostlySorted) {
    return generateMostlySortedTestData(len);
  } else {
    return generateRandomTestData(len);
  }
}

/*
 Functions to update global variables, called by onChange events
*/

function updateMinTestSize(min) {
  reset();
  if (min < 0 || min > 1000000 || Math.round(min) != min) {
    alert("Minimum test size must be an integer between 0 and 1,000,000");
    document.getElementById("minInput").value = minSize;
  } else {
    minSize = min;
  }
}

function updateMaxTestSize(max) {
  reset();
  if (max < 0 || max > 1000000 || Math.round(max) != max) {
    alert("Maximum test size must be an integer between 0 and 1,000,000");
    document.getElementById("maxInput").value = maxSize;
  } else if (max < minSize) {
    alert("Maximum test size must not be below minimum test size");
    document.getElementById("maxInput").value = maxSize;
  } else {
    maxSize = max;
  }
}

function updateNumTests(num) {
  reset();
  if (num < 1 || num > 100 || Math.round(num) != num) {
    alert("Number of tests must be an integer between 1 and 100");
    document.getElementById("numEach").value = numEachSize;
  } else {
    numEachSize = num;
  }
}

function updateAvgsOnly(str) {
  reset();
  avgsOnly = str == "Yes";
}

function updateMostlySorted(str) {
  reset();
  mostlySorted = str == "Mostly sorted";
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
        title: "Array size (n)",
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
  }
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
 Utility function to covert a "formula" string to a value
 
 If formula = "n^2", returns n * n;
 if formula = "nlog2(n)", returns n * log2(n);
 otherwise, returns n.
*/
function getValueFromFormula(n, formula) {
  let value = n;
  if (formula == "n^2") {
    value *= n;
  } else if (formula == "nlog2(n)") {
    value *= Math.log2(n);
  }
  return value;
}

/*
 Returns an array of (x, y) value pair objects to be used as chart
 data input.
 
 Each element n in the array is mapped to a pair (x, y), where x is
 set to n, and y is set to getValueFromFormula(n, formula) / divisor.
 
 formula: string argument to pass to getValueFromFormula function
 divisor: value to divide result of getValueFromFormula function by
*/
function mapArrayToDataPoints(arr, formula, divisor) {
  return arr.map(function (n) {
    let value = getValueFromFormula(n, formula);
    return {
      x: n,
      y: round(value / divisor)
    };
  });
}  

/*
 Utility function calculates an appropriate divisor to use.
 
 Looks at a portion of the array with the highest values,
 calculates the divisor needed by each value to match the
 formula, and returns the average of these values.
*/
function getDivisorFromDataPointsArray(arr, formula) {
  let topEndArr = arr.filter(obj => obj.x >= maxSize / 10);
  console.log("topEndArray: " + topEndArr);
  let divisors = topEndArr.map(obj => getValueFromFormula(obj.x, formula) / obj.y);
  console.log("divisors: " + divisors);
  let divisorsTotal = divisors.reduce((x, y) => x + y);
  console.log("divisorsTotal: " + divisorsTotal);
  let divisor = Math.round(divisorsTotal / divisors.length);
  console.log("divisor: " + divisor);
  return divisor;
}

/*
 Resets the UI
*/
function reset() {
  for (let i = 0; i <= 5; i++) {
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
 Resets the UI and all non-select variables
*/
function resetAll() {
  reset();

  minSize = 1000;
  maxSize = 10000;
  numEachSize = 5;

  document.getElementById("minInput").value = minSize;
  document.getElementById("maxInput").value = maxSize;
  document.getElementById("numEach").value = numEachSize;
}

/*
 Runs the tests, creates a CSV export of the results, and draws charts to the UI.
*/
function runTests() {
  console.log("min: " + minSize);
  console.log("max: " + maxSize);
  console.log("num: " + numEachSize);
  
  let rows = [["Test", "Array size", "Bubble sort (ms)", "Insertion sort (ms)", "Selection sort (ms)", "Merge sort (ms)", "Shell sort (ms)"]];
  
  let testSizes = [];
  let increment = Math.pow(10, Math.floor(Math.log10(minSize)));
  for (let x = parseInt(minSize, 10); x <= maxSize; x += increment) {
    testSizes.push(x);
    increment = Math.pow(10, Math.floor(Math.log10(x)));
  }
  console.log("test sizes: " + testSizes);
  let totalNumTests = testSizes.length * numEachSize;
  console.log("total num tests: " + totalNumTests);
  
  document.getElementById("runTests").innerHTML = "Running tests";
  alert(totalNumTests + " tests are about to be run on arrays containing up to " + maxSize
        + " elements.\n\nThis may take some time, so please check the console for progress updates.");
  
  let currentTest = 1;
    
  for (let i = 0; i < testSizes.length; i++) {
    let testSize = testSizes[i];
    console.log("test size: " + testSize);
    let gapsArr = getGaps(testSize);
        
    for (let j = 0; j < numEachSize; j++) {
      let testArray = generateTestData(testSize);
//      console.log("test data: " + testArray);
     
      console.log("Bubble sort...");

      let t1s = performance.now();
      bubbleSort(testArray);
      let t1e = performance.now();
      let t1 = round(t1e - t1s);
      
      console.log("Bubble sort completed in " + t1 + "ms.\nInsertion sort...");

      let t2s = performance.now();
      insertionSort(testArray);
      let t2e = performance.now();
      let t2 = round(t2e - t2s);

      console.log("Insertion sort completed in " + t2 + "ms.\nSelection sort...");

      let t3s = performance.now();
      selectionSort(testArray);
      let t3e = performance.now();
      let t3 = round(t3e - t3s);

      console.log("Selection sort completed in " + t3 + "ms.\nMerge sort...");

      let t4s = performance.now();
      mergeSort(testArray);
      let t4e = performance.now();
      let t4 = round(t4e - t4s);

      console.log("Merge sort completed in " + t4 + "ms.\nShell sort...");
      console.log("gapsArr: " + gapsArr);

      let t5s = performance.now();
      shellSort(testArray, gapsArr);
      let t5e = performance.now();
      let t5 = round(t5e - t5s);

      console.log("Shell sort completed in " + t5 + "ms.");
      
      rows.push([currentTest, testSize, t1, t2, t3, t4, t5]);
      
      let message = "Completed " + currentTest + " of " + totalNumTests + " tests";
      console.log(message);

      currentTest++;
    }
  }
  
  document.getElementById("runTests").innerHTML = "Reset";
  document.getElementById("runTests").setAttribute("onclick", "resetAll()");

  let csvContent = "data:text/csv;charset=utf-8,";

  if (avgsOnly) {
 
    let avgRows = [["Array size", "Number of tests", "Bubble sort (ms)", "Insertion sort (ms)", "Selection sort (ms)", "Merge sort (ms)", "Shell sort (ms)"]];
    for (let i = 0; i < testSizes.length; i++) {
      let subArr = rows.slice(1).slice(numEachSize * i, numEachSize * (i + 1));
      console.log("subArrays: ");
      for (let j = 0; j < numEachSize; j++) {
        console.log(subArr[j]);
      }
      let totalsArr = subArr.reduce((x, y) => [testSizes[i], numEachSize, x[2] + y[2], x[3] + y[3], x[4] + y[4], x[5] + y[5], x[6] + y[6]]);
      console.log("totals: "+ totalsArr);
      let avgsArr = totalsArr.map((x, i) => i < 2 ? x : round(x / numEachSize));
      console.log("avgs: " + avgsArr);
      avgRows.push(avgsArr);
    }
    rows = avgRows.slice();
    
    let chartData = [];
    let lineColors = ["hsl(0, 100%, 50%)", "hsl(240, 50%, 50%)", "hsl(150, 50%, 50%)", "hsl(300, 50%, 50%)", "hsl(40, 100%, 50%)"];
    
    for (let s = 1; s <= 5; s++) {
      let name = avgRows[0][s + 1].slice(0, -5);
      let color = lineColors[s - 1];
      let dataPointsArr = avgRows.slice(1).map(function getData(row) {
        return {
          x: row[0],
          y: row[s + 1]
        };
      });
      let dataObject = createChartDataObject(name, color, dataPointsArr);
      chartData.push(dataObject);
      let compColor = color.replace("50%)", "85%)");
      let formula = s <= 3 ? "n^2" : "nlog2(n)";
      if (s == 2 && mostlySorted) {
        formula = "n";
      }
      let divisor = getDivisorFromDataPointsArray(dataPointsArr, formula);
      let compName = "1/" + divisor + " * " + formula;
      let compDataPointsArr = mapArrayToDataPoints(testSizes, formula, divisor);
      let compDataObject = createChartDataObject(compName, compColor, compDataPointsArr);
      let chart = createChart("chart" + s, name.replace("sort", "Sort"), [dataObject, compDataObject]);
      charts[s] = chart;
      drawChart("chart" + s, chart);
    }
    console.log(JSON.stringify(chartData));
    let chart0 = createChart("chart0", "Sort Algorithm Average Runtimes", chartData);
    charts[0] = chart0;
    drawChart("chart0", chart0);

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
