"use strict";

// Load Google charts
google.charts.load("current", {packages: ["corechart", "bar"]});

// Store the path of the model 
let imageModelURL = "https://teachablemachine.withgoogle.com/models/PlEt6gLqy/";
// Store the classifier object
let classifier;


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

// Classify the given image
function classify(image) {
  image.setAttribute("class", "visible");
  // once complete, execute the 'processResults' callback
  classifier.classify(image, processResults);
}

// Callback to process the results
function processResults(error, result) {
  if (error) {
    console.error("classifier error: " + error);
  } else {
    drawChart(result);
  }
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
}

// Loops over the list of image URLs provided by `data/dataset.js` and classifies them
function runTests() {
  clear();
  let image = document.getElementById("image");
  let url = dataset[0];
  console.log(url);
  image.src = url;
  image.onload = function() {
    console.log("image loaded");
  }
  document.getElementById("filename").innerHTML = image.src;
  classify(image);
}
