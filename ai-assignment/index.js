"use strict";

// Load Google charts
google.charts.load("current", {packages: ["corechart", "bar"]});

// Store the path of the model
let imageModelURL = "https://teachablemachine.withgoogle.com/models/PlEt6gLqy/";
// Store the classifier object
let classifier;
// Whether or not to display a chart
let displayChart = true;
// An array representing rows of results
let rows = [["Filename", "Classes", "Classification", "Confidence"]];
// Current image index
let currentIndex = 0;

// p5 function which is automatically called by the p5 library (once only)
function preload() {
  // Load the model
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

// p5 function which is automatically called after the 'preload' function (once only)
function setup() {
  // Enable the buttons
  document.getElementById("upload").disabled = false;
  document.getElementById("tests").disabled = false;
}

// Clears the display
function clear() {
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("image").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
}

// Launches the file picker
function openDialog() {
  clear();
  displayChart = true;
  document.getElementById("input").click();
}

// Reads the chosen file into the image element, and launches the classifier
function showFiles() {
  let demoImage = document.getElementById("image");
  // read the file from the user
  let file = document.getElementById("input").files[0];
  let name = file.name;
  const reader = new FileReader();
  reader.onload = function (event) {
      demoImage.src = reader.result;
  }
  reader.readAsDataURL(file);
  console.log(name);
  document.getElementById("filename").innerHTML = name;
  classify(demoImage);
}

// Classifies the given image
function classify(image) {
  // once complete, execute the 'processResults' callback
  classifier.classify(image, processResults);
}

// Callback to write the results to csv and (if appropriate) display them in a chart
function processResults(error, result) {
  if (error) {
    console.error("classifier error: " + error);
  } else {
    if (displayChart) {
      drawChart(result);
    } else {
      addRow(result);
    }
  }
}

// Adds a row of data to the csv and loads the next image
function addRow(result) {
  console.log("adding row " + (currentIndex + 1));
  let urlArray = dataset[currentIndex].split("/");
  let filename = urlArray[urlArray.length - 1];
  let maxConfidence = 0;
  let classification = "";
  let classes = "";
  for (let i = 0; i < result.length; i++) {
    if (i > 0) {
      classes += "; ";
    }
    classes += result[i].label;
    if (result[i].confidence > maxConfidence) {
      maxConfidence = result[i].confidence;
      classification = result[i].label;
    }
  }
  rows.push([filename, classes, classification, Math.round(maxConfidence * 100)]);
  console.log(rows[rows.length - 1]);
  currentIndex++;
  if (currentIndex < dataset.length) {
    loadImage(dataset[currentIndex], imageReady);
  } else {
    document.getElementById("processing").setAttribute("class", "hidden");
    createCsv();
  }
}


// Callback to classify the image when it's finished loading
function imageReady(image) {
  image(image, 244, 244);
  classify(image);
}


// Draws a chart to display the classifier results
function drawChart(result) {
  let data = Array((result.length + 1));
  data[0] = ["Class", "Confidence", { role: "style" }];
  data[1] = [result[0].label, Math.round(result[0].confidence * 100), "#982107"];
  data[2] = [result[1].label, Math.round(result[1].confidence * 100), "#982107"];

  console.log(data);
  let table = google.visualization.arrayToDataTable(data);
  let view = new google.visualization.DataView(table);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);
  let options = {
      title: "Confidence %",
      width: 600,
      height: 150,
      bar: {groupWidth: "75%"},
      legend: { position: "none" },
  };
  let chart = new google.visualization.BarChart(document.getElementById("chart"));
  chart.draw(view, options);
  document.getElementById("chart").setAttribute("class", "visible");
  document.getElementById("image").setAttribute("class", "visible");
}

// Loops over the list of image URLs provided by `data/dataset.js` and classifies them
function runTests() {
  document.getElementById("processing").setAttribute("class", "visible");
  clear();
  displayChart = false;
  loadImage(dataset[0], imageReady);
}

// Creates a csv of the results
function createCsv() {
  console.log(rows);
  let csvContent = "data:text/csv;charset=utf-8,";
  for(let i = 0; i < rows.length; i++) {
    // for each row array, create a string of comma-separated values
    let row = rows[i].join(",");
    // ensure each row string is on a new line
    csvContent += row + "\r\n";
  }
  // create a link to download the CSV file
  let encodedUri = encodeURI(csvContent);
  let link = document.getElementById("csvLink");
  link.setAttribute("href", encodedUri);
  // set the hyperlink to download the CSV
  link.setAttribute("download", "test_data.csv");
  // unhide the HTML element and style it as a button
  link.setAttribute("class", "button");
  link.innerHTML = "Download CSV";
}
