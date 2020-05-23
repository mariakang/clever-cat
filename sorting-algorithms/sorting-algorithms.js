function bubbleSort(arr) {
  let a = arr.slice();
  let loop = true;
  while (loop) {
    let swaps = 0;
    for (let i = 0; i < a.length - 1; i++) {
      let val = a[i];
      let nextVal = a[i + 1];
      if (val > nextVal) {
        a[i] = nextVal;
        a[i + 1] = val;
        swaps += 1;
      }
    }
    loop = swaps > 0;
//    console.log(a);
  }
  return a;
}

function insertionSort(arr) {
  let a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    let val = a[i];
    let j = i - 1;
    while (a[j] > val && j >= 0) {
      a[j + 1] = a[j];
      a[j] = val;
 //     console.log(a);
      j--;
    }
//    console.log(a);
  }
  return a;
}

function selectionSort(arr) {
  let a = arr.slice();
  for (let i = 0; i < a.length - 1; i++) {
    let min = a[i];
    let index = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < min) {
        min = a[j];
        index = j;
      }
    }
    a.splice(index, 1);
    a.splice(i, 0, min);
//    console.log(a);
  }
  return a;
}

function mergeSort(arr) {
  function merge (left, right) {
    let res = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        res.push(left[leftIndex]);
        leftIndex++;
      } else {
        res.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return res
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
  }
  let a = arr.slice();
  if (a.length <= 1) {
    return a;
  }
  let mid = Math.floor(a.length / 2);
  let left = a.slice(0, mid);
  let right = a.slice(mid);
  a = merge(mergeSort(left),mergeSort(right));
//  console.log(a);
  return a;
}

function getGaps(arrSize) {
  let gaps = [Math.floor(arrSize / 2)];
  while (gaps.indexOf(1) == -1) {
    let gap = Math.floor(gaps[gaps.length - 1] / 2);
//    console.log(gap);
    gaps.push(gap);
  }
  return gaps;
//  console.log(gaps);
}

function shellSort(arr, gapsArr) {
  let a = arr.slice();
  if (a.length < 2) {
    return a;
  }
  for (let i = 0; i < gapsArr.length; i++) {
    let gap = gapsArr[i];
    for (let j = gap; j < a.length; j++) {
      let val = a[j];
      let k = j;
      while (k >= gap && a[k - gap] > val) {
        a[k] = a[k - gap];
        k -= gap;
      }
      a[k] = val;
    }
//    console.log(a);
  }
  return a;
}

function generateRandomTestData(len) {
  let a = [];
  for (let i = 0; i < len; i++) {
    a.push(Math.round(Math.random() * len * 10));
  }
  console.log(a);
  return a;
}

function generateSortedTestData(len) {
  let a = [];
  for (let i = 0; i < len; i++) {
    a.push(i);
  }
//  console.log(a);
  return a;
}

function generateMostlySortedTestData(len) {
  let a = generateSortedTestData(len);
  let numChanges = Math.floor(len * 7 / 100);
  let indices = a.slice();
  let changes = [];
  for (let i = 0; i < numChanges; i++) {
    let rand = Math.round(Math.random() * indices.length);
    // removes element at index rand from indices array
    // and adds it to changes array
    changes = changes.concat(indices.splice(rand, 1));
  }
  let temp = a[changes[0]];
  for (let i = 0; i < numChanges - 1; i++) {
    a[changes[i]] = a[changes[i + 1]];
  }
  a[changes[numChanges - 1]] = temp;
  console.log(a);
  return a;
}

let minSize = 1000;
let maxSize = 10000;
let numEachSize = 5;
let avgsOnly = true;
let mostlySorted = false;

let charts = [];
        
function generateTestData(len) {
  if (mostlySorted) {
    return generateMostlySortedTestData(len);
  } else {
    return generateRandomTestData(len);
  }
}

function updateMinTestSize(min) {
  reset();
  if (min < 0 || min > 1000000) {
    alert("Minimum test size must be between 0 and 1,000,000");
    document.getElementById("minInput").value = minSize;
  } else {
    minSize = min;
  }
}

function updateMaxTestSize(max) {
  reset();
  if (max < 0 || max > 1000000) {
    alert("Maximum test size must be between 0 and 1,000,000");
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
  if (num < 1 || num > 100) {
    alert("Number of tests must be between 1 and 100");
    document.getElementById("numEach").value = numEachSize;
  } else {
    numEachSize = num;
  }
}

function updateAvgsOnly(str) {
  reset();
  avgsOnly = str == "Yes";
}

function round(n) {
  return Math.round(n * 10000) / 10000;
}

function updateMostlySorted(str) {
  reset();
  mostlySorted = str == "Mostly sorted";
}

function createChart(id, title, dataArray) {
  let chart = new CanvasJS.Chart(id, {
      title: {
        text: title
      },
      axisX: {
        title: "Array size",
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

function resetAll() {
  reset();

  minSize = 1000;
  maxSize = 10000;
  numEachSize = 5;

  document.getElementById("minInput").value = minSize;
  document.getElementById("maxInput").value = maxSize;
  document.getElementById("numEach").value = numEachSize;
}


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
  console.log(testSizes);
  let totalNumTests = testSizes.length * numEachSize;
  console.log(totalNumTests);
  
  document.getElementById("runTests").innerHTML = "Running tests";
  alert(totalNumTests + " tests are about to be run on arrays containing up to " + maxSize
        + " elements.\n\nThis may take some time, so please check the console for progress updates.");
  
  let currentTest = 1;
    
  for (let i = 0; i < testSizes.length; i++) {
    let testSize = testSizes[i];
        
    for (let j = 0; j < numEachSize; j++) {
      let testArray = generateTestData(testSize);

      let t1s = performance.now();
      bubbleSort(testArray);
      let t1e = performance.now();
      let t1 = round(t1e - t1s);

      let t2s = performance.now();
      insertionSort(testArray);
      let t2e = performance.now();
      let t2 = round(t2e - t2s);

      let t3s = performance.now();
      selectionSort(testArray);
      let t3e = performance.now();
      let t3 = round(t3e - t3s);

      let t4s = performance.now();
      mergeSort(testArray);
      let t4e = performance.now();
      let t4 = round(t4e - t4s);

      let gapsArr = getGaps(testSize);
      let t5s = performance.now();
      shellSort(testArray, gapsArr);
      let t5e = performance.now();
      let t5 = round(t5e - t5s);
      
      rows.push([currentTest, testSize, t1, t2, t3, t4, t5]);
      
      let message = "Completed " + currentTest + " of " + totalNumTests + " tests";
      console.log(message);

      currentTest++;
    }
  }
  
  document.getElementById("runTests").innerHTML = "Reset";
  document.getElementById("runTests").setAttribute("onclick", "resetAll()");

  document.getElementById("top").setAttribute("class", "flexRow");
  document.getElementById("bottom").setAttribute("class", "flexRow");

  let csvContent = "data:text/csv;charset=utf-8,";

  if (avgsOnly) {
    let avgRows = [["Array size", "Number of tests", "Bubble sort (ms)", "Insertion sort (ms)", "Selection sort (ms)", "Merge sort (ms)", "Shell sort (ms)"]];
    let lineColors = ["DarkBlue", "DarkRed", "DarkOliveGreen", "DarkCyan", "DarkOrchid"];
    for (let i = 0; i < testSizes.length; i++) {
      let subArr = rows.slice(1).slice(numEachSize * i, numEachSize * (i + 1));
      console.log(subArr[0] + "\n"
                 + subArr[1] + "\n"
                 + subArr[2] + "\n"
                 + subArr[3] + "\n"
                 + subArr[4]);
      let totalsArr = subArr.reduce((x, y) => [testSizes[i], numEachSize, x[2] + y[2], x[3] + y[3], x[4] + y[4], x[5] + y[5], x[6] + y[6]]);
      console.log(totalsArr);
      let avgsArr = totalsArr.map((x, i) => i < 2 ? x : round(x / numEachSize));
      console.log(avgsArr);
      avgRows.push(avgsArr);
    }
    rows = avgRows.slice();
    
    let chartData = [];
    
    for (let s = 1; s <= 5; s++) {
      let name = avgRows[0][s + 1].slice(0, -5);
      let dataSet = {
        type: "line",
        name: name,
        showInLegend: true,
        color: lineColors[s - 1],
        lineColor: lineColors[s - 1],
        markerSize: 0,
        yValueFormatString: "#,###.00",
        dataPoints: avgRows.slice(1).map(function getData(row) {
          return {
            x: row[0],
            y: row[s + 1]
          };
        })
      };
      chartData.push(dataSet);
      let chart = createChart("chart" + s, name.replace("sort", "Sort") + " Average Runtimes", [dataSet]);
      charts.push(chart);
      drawChart("chart" + s, chart);
    }
    console.log(JSON.stringify(chartData));
    let chart0 = createChart("chart0", "Sort Algorithm Average Runtimes", chartData);
    charts.unshift(chart0);
    drawChart("chart0", chart0);
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
