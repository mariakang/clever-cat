"use strict";
// Ada Boilerplate - JavaScript and Computer Vision Teachable Machine,
// Machine Learning & Teachable Machine Models

// Load Google charts
google.charts.load("current", {packages: ["corechart", "bar"]});

//for easy lets setup some quick global variables
let imageModelURL = "https://teachablemachine.withgoogle.com/models/PlEt6gLqy/"; //variable used to hold path to the model
let classifier; //variable used to hold the classifier object


function preload() {
	//p5 function - this function is automatically called by the p5 library, once only
	classifier = ml5.imageClassifier(imageModelURL + "model.json"); //load the model!
}


function setup() {
	//p5 function - this function is autmaticallt called after the 'preload' function; the function is only executed once
	document.getElementById("upload").disabled = false;
	document.getElementById("tests").disabled = false;
}


function clear() {
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("image").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
}


function openDialog() {
  clear();
  document.getElementById("input").click();
}


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


function classify(image) {
	//ml5, classify the current information stored in the camera object
  image.setAttribute("class", "visible");
	classifier.classify(image, processResults); //once complete execute a callback to the processresults function
}


function processResults(error, result) {
	//a simple way to return the current classification details
	if (error) { //something seems to have gone wrong
		console.error("classifier error: " + error);
	} else { //no errors detected, so lets grab the label and execute the classify function again
	  drawChart(result);
	}
}


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