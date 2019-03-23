

// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Transfer Learning Feature Extractor Classification with ml5
// https://youtu.be/eeO-rWYFuG0

let mobilenet;
let classifier;
let video;
let label = 'Loading Model';
let ukeButton;
let whistleButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
  classifier.load("./model.json",CustomModelReady)
}

function CustomModelReady(){
  console.log('Custom Model is ready!!!');
  label = 'Model Ready';
  classifier.classify(gotResults);
}

function videoReady() {
  console.log('Video is ready!!!');
}

function gotResults(error, result) {
  if (error) {
    console.error(error);
  } else {
    label = result;
    classifier.classify(gotResults);
  }
}

function setup() {
  createCanvas(320, 270);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor('MobileNet', modelReady);
  mobilenet.numClasses=10;
  classifier = mobilenet.classification(video, videoReady);
}



  

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}