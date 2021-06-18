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
  // Clear any previous output
  document.getElementById("csvLink").setAttribute("class", "hidden");
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("canvas").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
  document.getElementById("filename").setAttribute("class", "hidden");
  document.getElementById("summary").setAttribute("class", "hidden");
  document.getElementById("chestXRaySummary").innerHTML = "";
  document.getElementById("pneumoniaSummary").innerHTML = "";
  document.getElementById("pneumoniaTypeSummary").innerHTML = "";
  // Launch the filepicker
  document.getElementById("input").click();
}

// Reads the chosen file into the image element, and launches the classifier
function showFiles() {
  // Store the image element in a variable, and set a listener to call 'imageReady'
  // whenever the image is loaded (which will happen every time its 'src' attribute is set)
  let image = document.getElementById("image");
  image.addEventListener("load", e => {
    imageReady(image);
  });
  // read the file from the user
  let file = document.getElementById("input").files[0];
  let name = file.name;
  const reader = new FileReader();
  reader.onload = function (event) {
    // set the 'src' attribute of the image to the file path
    image.src = reader.result;
  }
  reader.readAsDataURL(file);
  // log the filename and store it in the relevant element
  console.log(name);
  document.getElementById("filename").innerHTML = name;
  // display "processing..."
  document.getElementById("processing").setAttribute("class", "visible");
}

// Called when the image is ready: crops, resizes and classifies it
function imageReady(image) {
  let canvas = document.getElementById("canvas");
  // crop the image to square and resize to 224 x 224 
  cropAndResizeImageToCanvas(image, canvas);
  // classify the cropped and resized image
  classify(canvas);
}

// Takes an image and copies the largest possible (centralised) square portion of it to
// the given canvas element, resized to 224 x 224 pixels
function cropAndResizeImageToCanvas(image, canvas) {
  canvas.width = 224;
  canvas.height = 224;
  let width = image.width;
  let height = image.height;
  let min = Math.min(width, height);
  let dx = width - min;
  let dy = height - min;
  let ctx = canvas.getContext('2d');
  ctx.drawImage(image, dx / 2, dy / 2, min, min, 0, 0, 224, 224);
}

// Classifies the given image
function classify(image) {
  // use the chest x-ray classifier first; if it is a chest x-ray then
  // further classifications will follow
  chestXRayClassifier.classify(image, checkIfChestXRay);
}

// Callback for the chest x-ray model: determines whether or not the image is a chest x-ray, and if so,
// classifies it further
function checkIfChestXRay(error, result) {
  console.log("Checking if image is a chest x-ray");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    // determine the confidence level for "is chest x-ray" (converted to a percentage)
    let confidenceChestXRay = result[0].label == "Chest X-Ray" ? result[0].confidence : result[1].confidence;
    confidenceChestXRay = Math.round(confidenceChestXRay * 100);
    // initialise an element to store the output message
    let summary = "";
    // generate a classification summary message, based on the level of confidence 
    if (confidenceChestXRay >= 80) {
      // if >= 80%, perform the next level of classification
      classifyChestXRay();
      summary = "The image is a chest X-ray (" + confidenceChestXRay + "%)";
    } else {
      if (confidenceChestXRay >= 60) {
        summary = "The image is probably a chest X-ray (" + confidenceChestXRay + "%), but no futher analysis was performed due to uncertainty.";
      } else {
        summary = "The image could not be recognised as a chest X-ray (" + confidenceChestXRay + "%), so no further analysis was performed.";
      }
      // < 80% => no further classification, so draw the graph
      drawChart(result, "#982107");
    }
    // display the summary, regardless of the result
    document.getElementById("chestXRaySummary").innerHTML = summary;
  }
}

// Classifies the chest x-ray
function classifyChestXRay() {
  let image = document.getElementById("image");
  // use the pneumonia classifier to predict whether or not pneumonia is present;
  // if so, then further classification will follow
  normalVsPneumoniaClassifier.classify(image, checkIfPneumonia);
}

// Callback for the pneumonia model: determines whether or not pneumonia is present in the image, and if so,
// classifies it further
function checkIfPneumonia(error, result) {
  console.log("Checking for pneumonia");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    // determine the confidence level for "pneumonia" (converted to a percentage)
    let confidencePneumonia = result[0].label == "Pneumonia" ? result[0].confidence : result[1].confidence;
    confidencePneumonia = Math.round(confidencePneumonia * 100);
    // initialise an element to store the output message
    let summary = "";
    // generate a classification summary message, based on the level of confidence 
    if (confidencePneumonia >= 80) {
      // if >= 80%, perform the next level of classification
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
      // < 80% => no further classification, so draw the graph
      drawChart(result, "#0066ff");
    }
    // display the summary, regardless of the result
    document.getElementById("pneumoniaSummary").innerHTML = summary;
  }
}

// Classifies the pneumonia type as "bacterial" or "viral"
function classifyPneumoniaType() {
  let image = document.getElementById("image");
  bacterialVsViralClassifier.classify(image, bacterialOrViral);
}

// Callback for the pneumonia type model: determines whether the pneumonia is "bacterial" or "viral"
function bacterialOrViral(error, result) {
  console.log("Classifying as bacterial or viral");
  if (error) {
    console.error("classifier error: " + error);
  } else {
    // initialise a variable to store the output message
    let summary = "";
    // transform the result array to an array of strings of the form "Class (XX%)"
    // for use in output message
    let resultSnippets = result.map(x => x.label + " (" + Math.round(x.confidence * 100) + "%)");
    // generate a message based on the level of confidence
    if (result[0].confidence > 0.8) {
      summary = "The pneumonia is " + resultSnippets[0];
    } else if (result[1].confidence > 0.8) {
      summary = "The pneumonia is " + resultSnippets[1];
    } else {
      summary = "The pneumonia could be " + resultSnippets[0] + " or " + resultSnippets[1];
    }
    // display the message and draw the graph
    document.getElementById("pneumoniaTypeSummary").innerHTML = summary;
    drawChart(result, "#339966");
  }
}


// Draws a chart to display the classifier results
function drawChart(result, colour) {
  console.log("Drawing chart");
  // Store the data in an array of the correct format
  let data = Array((result.length + 1));
  data[0] = ["Class", "Confidence", { role: "style" }];
  data[1] = [result[0].label, Math.round(result[0].confidence * 100), colour];
  data[2] = [result[1].label, Math.round(result[1].confidence * 100), colour];
  // generate a table and 'DataView' object from the data
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
  // Draw a horizontal bar chart
  let chart = new google.visualization.BarChart(document.getElementById("chart"));
  chart.draw(view, options);
  // Display the loaded (cropped and resized) image and the classification output
  document.getElementById("summary").setAttribute("class", "visible");
  document.getElementById("chart").setAttribute("class", "visible");
  document.getElementById("canvas").setAttribute("class", "visible");
  document.getElementById("filename").setAttribute("class", "visible");
  // Hide the "processing..." message
  document.getElementById("processing").setAttribute("class", "hidden");
}

// Called when "Run Tests" is clicked on: opens a modal to select the model to test
function openModal() {
  document.getElementById("modal").setAttribute("class", "visible");
}
 // Called when the modal background is clicked on: closes the modal
function closeModal() {
  document.getElementById("modal").setAttribute("class", "hidden");
}

// Loops over the list of image URLs provided by `data/dataset.js` and classifies them
// using the given test model
function runTests(testModel) {
  // close the modal
  document.getElementById("modal").setAttribute("class", "hidden");
  console.log(testModel);
  // clear the display
  document.getElementById("csvLink").setAttribute("class", "hidden");
  document.getElementById("chart").setAttribute("class", "hidden");
  document.getElementById("canvas").setAttribute("class", "hidden");
  document.getElementById("filename").innerHTML = "";
  document.getElementById("filename").setAttribute("class", "hidden");
  document.getElementById("summary").setAttribute("class", "hidden");
  document.getElementById("chestXRaySummary").innerHTML = "";
  document.getElementById("pneumoniaSummary").innerHTML = "";
  document.getElementById("pneumoniaTypeSummary").innerHTML = "";
  // display a "processing..." message
  document.getElementById("processing").setAttribute("class", "visible");
  // set the testClassifier to the relevant one, and discard any irrelevant data items
  if (testModel === "chestXRay") {
    testClassifier = chestXRayClassifier;
  } else if (testModel === "multiclass") {
    testClassifier = multiclassClassifier;
  } else {
    // test model isn't chest x-ray or multiclass, so get rid of any images which aren't
    // of chest x-rays
    dataset = dataset.filter(x => x["Chest X-Ray"]);
    if (testModel === "pneumoniaType") {
      // if the test model is pneumonia type, then only the pneumonia images are relevant
      dataset = dataset.filter(x => x["Pneumonia"]);
      testClassifier = bacterialVsViralClassifier;
    } else {
      testClassifier = normalVsPneumoniaClassifier;
    }
  }
  // Store the image element in a variable, and set a listener to call 'testImageReady'
  // whenever the image is loaded (which will happen every time its 'src' attribute is set)
  let image = document.getElementById("image");
  image.addEventListener("load", e => {
    testImageReady(image);
  });
  // reset the current index to 0
  currentIndex = 0;
  // set the image source as the URL of the first data item
  image.src = dataset[0]["URL"];
}

// Called when the image is ready: crops, resizes and classifies it
function testImageReady(image) {
  let canvas = document.getElementById("canvas");
  cropAndResizeImageToCanvas(image, canvas);
  canvas.setAttribute("class", "visible");
  // once complete, execute the 'processTestResult' callback
  testClassifier.classify(canvas, processTestResult);
}

// Callback to process the results provided by the model under test
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
  // iterate over the result array to append the class names and update
  // the maximum confidence value (and classification)
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
  // add the new row to the array of rows
  rows.push([filename, classes, classification, Math.round(maxConfidence * 100)]);

  // iterate over the classes to update the relevant confusion matrices
  for (let i = 0; i < result.length; i++) {
    let classLabel = result[i].label;
    console.log(classLabel);
    // get the matrix object corresponding to the class
    let confusionMatrix = confusionMatrices[classLabel];
    if (dataset[currentIndex][classLabel]) {  // i.e. the data item under test has "true" for this class
      if (classification === classLabel && maxConfidence >= 0.8) { // i.e. a positive result was given for this class
        confusionMatrix.TP++;
      } else { // i.e. a negative result was given for this class (> 50% but < 80% counts as a negative result)
        confusionMatrix.FN++;
      }
    } else { // i.e. the data item under test has "false" for this class
      if (classification === classLabel && maxConfidence >= 0.8) { // i.e. a positive result was given for this class
        confusionMatrix.FP++;
      } else { // i.e. a negative result was given for this class (> 50% but < 80% counts as a negative result)
        confusionMatrix.TN++;
      }
    }
    console.log(confusionMatrices[classLabel]);
  }

  // log the test output to the console
  console.log(rows[rows.length - 1]);
  // increment the index
  currentIndex++;
  // if we haven't reached the end of the dataset, move on to the next item and repeat the process
  if (currentIndex < dataset.length) {
    // set the image src attribute to the URL of the next item; the 'load' listener will trigger the
    // classification process, which includes moving on to the next item
    let image = document.getElementById("image");
    image.src = dataset[currentIndex]["URL"];
  // if we have reached the end of the dataset, then hide the "processing..." message and image, add
  // the final confusion matrix results to the 'rows' array, and generate the CSV and download button
  } else {
    document.getElementById("processing").setAttribute("class", "hidden");
    addConfusionMatrixRows();
    createCsv();
  }
}

// Adds rows to the csv to represent the confusion matrices
function addConfusionMatrixRows() {
  rows.push([""]);
  // iterate over the confusion matrix objects
  for (const [key, value] of Object.entries(confusionMatrices)) {
    // if at least one value is greater than zero, add rows
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
