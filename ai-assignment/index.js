"use strict";

// Load Google charts
google.charts.load("current", {packages: ["corechart", "bar"]});

// Store the paths of the models
let chestXRayModelURL = "https://teachablemachine.withgoogle.com/models/4ET1--Ix-/";
let normalVsPneumoniaModelURL = "https://teachablemachine.withgoogle.com/models/3DTcolOWc/";
let bacterialVsViralModelURL = "https://teachablemachine.withgoogle.com/models/VafwJDyiu/";
let multiclassModelURL = "https://teachablemachine.withgoogle.com/models/yjBlRUsUV/";
// Store the classifier objects
let testClassifier;
let chestXRayClassifier;
let normalVsPneumoniaClassifier;
let bacterialVsViralClassifier;
let multiclassClassifier;
// An array representing rows of results
let rows = [["Filename", "Classes", "Classification", "Confidence"]];
// Current image index
let currentIndex = 0;
// Confusion matrices
let confusionMatrices = {
  "Chest X-Ray": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  },
  "Other": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  },
  "Normal": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  },
  "Pneumonia": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  },
  "Bacterial": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  },
  "Viral": {
    TP: 0,
    FP: 0,
    FN: 0,
    TN: 0,
  }
}

// p5 function which is automatically called by the p5 library (once only)
function preload() {
  // Load the models
  chestXRayClassifier = ml5.imageClassifier(chestXRayModelURL + "model.json");
  normalVsPneumoniaClassifier = ml5.imageClassifier(normalVsPneumoniaModelURL + "model.json");
  bacterialVsViralClassifier = ml5.imageClassifier(bacterialVsViralModelURL + "model.json");
  multiclassClassifier = ml5.imageClassifier(multiclassModelURL + "model.json");
}

// p5 function which is automatically called after the 'preload' function (once only)
function setup() {
  // Enable the buttons
  document.getElementById("upload").disabled = false;
  document.getElementById("tests").disabled = false;
}

// Launches the file picker
function openDialog() {
  document.getElementById("csvLink").setAttribute("class", "hidden");
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("image").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
  document.getElementById("filename").setAttribute("class", "hidden");
  document.getElementById("summary").setAttribute("class", "hidden");
  document.getElementById("chestXRaySummary").innerHTML = "";
  document.getElementById("pneumoniaSummary").innerHTML = "";
  document.getElementById("pneumoniaTypeSummary").innerHTML = "";

  document.getElementById("input").click();
}

// Reads the chosen file into the image element, and launches the classifier
function showFiles() {
  let image = document.getElementById("image");
  // read the file from the user
  let file = document.getElementById("input").files[0];
  let name = file.name;
  const reader = new FileReader();
  reader.onload = function (event) {
      image.src = reader.result;
  }
  reader.readAsDataURL(file);
  console.log(name);
  document.getElementById("filename").innerHTML = name;
  document.getElementById("processing").setAttribute("class", "visible");
  classify(cropTo(image, 224));
}

function cropTo(image, size) {
  let canvas = document.createElement("canvas");
  let width = image.width;
  let height = image.height;

  let min = Math.min(width, height);
  let scale = size / min;
  let scaledW = Math.ceil(width * scale);
  let scaledH = Math.ceil(height * scale);
  let dx = scaledW - size;
  let dy = scaledH - size;
  canvas.width = canvas.height = size;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(image, ~~(dx / 2) * -1, ~~(dy / 2) * -1, scaledW, scaledH);

    // canvas is already sized and cropped to center correctly
//    if (flipped) {
//        ctx.scale(-1, 1);
//        ctx.drawImage(canvas, size * -1, 0);
//    }

  return canvas;
}

function classify(image) {
  chestXRayClassifier.classify(image, checkIfChestXRay);
}

function checkIfChestXRay(error, result) {
  console.log("Checking if image is a chest x-ray");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    let confidenceChestXRay = result[0].label == "Chest X-Ray" ? result[0].confidence : result[1].confidence;
    confidenceChestXRay = Math.round(confidenceChestXRay * 100);
    let summary = "";
    if (confidenceChestXRay >= 80) {
      classifyChestXRay();
      summary = "The image is a chest X-ray (" + confidenceChestXRay + "%)";
    } else {
      if (confidenceChestXRay >= 60) {
        summary = "The image is probably a chest X-ray (" + confidenceChestXRay + "%), but no futher analysis was performed due to uncertainty.";
      } else {
        summary = "The image could not be recognised as a chest X-ray (" + confidenceChestXRay + "%), so no further analysis was performed.";
      }
      drawChart(result, "#982107");
    }
    document.getElementById("chestXRaySummary").innerHTML = summary;
  }
}

function classifyChestXRay() {
  let image = document.getElementById("image");
  normalVsPneumoniaClassifier.classify(image, checkIfPneumonia);
}

function checkIfPneumonia(error, result) {
  console.log("Checking for pneumonia");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    let confidencePneumonia = result[0].label == "Pneumonia" ? result[0].confidence : result[1].confidence;
    confidencePneumonia = Math.round(confidencePneumonia * 100);
    let summary = "";
    if (confidencePneumonia >= 80) {
      classifyPneumoniaType();
      summary = "Pneumonia is present (" + confidencePneumonia + "%)";
    } else {
      if (confidencePneumonia >= 50) {
        summary = "Pneumonia may be present (" + confidencePneumonia + "%), but no futher analysis was performed due to uncertainty.";
      } else if (confidencePneumonia >= 20) {
        summary = "The X-ray is probably normal (" + (100 - confidencePneumonia) + "%), so no further analysis was performed.";
      } else {
        summary = "The X-ray is normal (" + (100 - confidencePneumonia) + "%)";
      }
      drawChart(result, "#0066ff");
    }
    document.getElementById("pneumoniaSummary").innerHTML = summary;
  }
}

function classifyPneumoniaType() {
  let image = document.getElementById("image");
  bacterialVsViralClassifier.classify(image, bacterialOrViral);
}

function bacterialOrViral(error, result) {
  console.log("Classifying as bacterial or viral");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    let summary = "";
    let resultSnippets = result.map(x => x.label + " (" + Math.round(x.confidence * 100) + "%)");
    if (result[0].confidence > 0.8) {
      summary = "The pneumonia is " + resultSnippets[0];
    } else if (result[1].confidence > 0.8) {
      summary = "The pneumonia is " + resultSnippets[1];
    } else {
      summary = "The pneumonia could be " + resultSnippets[0] + " or " + resultSnippets[1];
    }
    document.getElementById("pneumoniaTypeSummary").innerHTML = summary;
    drawChart(result, "#339966");
  }
}


// Draws a chart to display the classifier results
function drawChart(result, colour) {
  console.log("Drawing chart");
  let data = Array((result.length + 1));
  data[0] = ["Class", "Confidence", { role: "style" }];
  data[1] = [result[0].label, Math.round(result[0].confidence * 100), colour];
  data[2] = [result[1].label, Math.round(result[1].confidence * 100), colour];

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
  document.getElementById("summary").setAttribute("class", "visible");
  document.getElementById("chart").setAttribute("class", "visible");
  document.getElementById("image").setAttribute("class", "visible");
  document.getElementById("filename").setAttribute("class", "visible");
  document.getElementById("processing").setAttribute("class", "hidden");
}

function openModal() {
  document.getElementById("modal").setAttribute("class", "visible");
}

function closeModal() {
  document.getElementById("modal").setAttribute("class", "hidden");
}

// Loops over the list of image URLs provided by `data/dataset.js` and classifies them
function runTests(testModel) {
  document.getElementById("modal").setAttribute("class", "hidden");
  console.log(testModel);
  document.getElementById("csvLink").setAttribute("class", "hidden");
  document.getElementById("processing").setAttribute("class", "visible");
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("image").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
  document.getElementById("filename").setAttribute("class", "hidden");
  document.getElementById("summary").setAttribute("class", "hidden");
  document.getElementById("chestXRaySummary").innerHTML = "";
  document.getElementById("pneumoniaSummary").innerHTML = "";
  document.getElementById("pneumoniaTypeSummary").innerHTML = "";
  if (testModel === "chestXRay") {
    testClassifier = chestXRayClassifier;
  } else if (testModel === "multiclass") {
    testClassifier = multiclassClassifier;
  } else {
    dataset = dataset.filter(x => x["Chest X-Ray"]);
    if (testModel === "pneumoniaType") {
      dataset = dataset.filter(x => x["Pneumonia"]);
      testClassifier = bacterialVsViralClassifier;
    } else {
      testClassifier = normalVsPneumoniaClassifier;
    }
  }
  loadImage(dataset[0]["URL"], testImageReady);
}

// Classifies the given image
function testImageReady(image) {
  // once complete, execute the 'processTestResult' callback
  testClassifier.classify(image, processTestResult);
}

// Callback to write the results to csv
function processTestResult(error, result) {
  if (error) {
    console.error("classifier error: " + error);
  } else {
    analyse(result);
  }
}

// Adds a row of data to the csv, updates the relevant confusion matrices, and loads the next image
function analyse(result) {
  console.log("analysing image " + (currentIndex + 1));
  // create a row to add to the CSV
  let urlArray = dataset[currentIndex]["URL"].split("/");
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
  // update the relevant confusion matrices
  for (let i = 0; i < result.length; i++) {
    let classLabel = result[i].label;
    console.log(classLabel);
    let confusionMatrix = confusionMatrices[classLabel];
    if (dataset[currentIndex][classLabel]) {
      if (classification === classLabel && maxConfidence >= 0.8) {
        confusionMatrix.TP++;
      } else {
        confusionMatrix.FN++;
      }
    } else {
      if (classification === classLabel && maxConfidence >= 0.8) {
        confusionMatrix.FP++;
      } else {
        confusionMatrix.TN++;
      }
    }
    console.log(confusionMatrices[classLabel]);
  }
  console.log(rows[rows.length - 1]);
  currentIndex++;
  if (currentIndex < dataset.length) {
    loadImage(dataset[currentIndex]["URL"], testImageReady);
  } else {
    document.getElementById("processing").setAttribute("class", "hidden");
    addConfusionMatrixRows();
    createCsv();
  }
}

// Adds rows to the csv to represent the confusion matrices
function addConfusionMatrixRows() {
  rows.push([""]);
  for (const [key, value] of Object.entries(confusionMatrices)) {
    if (value.TP > 0 || value.FP > 0 || value.FN > 0 || value.TN > 0) {
      rows.push(["Confusion matrix for class '" + key + "'"]);
      rows.push(["TP", value.TP]);
      rows.push(["FP", value.FP]);
      rows.push(["FN", value.FN]);
      rows.push(["TN", value.TN]);
      rows.push([""]);
    }
  }
}

// Creates a csv of the results
function createCsv() {
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
  link.setAttribute("class", "visible, button");
  link.innerHTML = "Download CSV";
}
