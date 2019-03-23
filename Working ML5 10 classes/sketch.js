

// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Transfer Learning Feature Extractor Classification with ml5
// https://youtu.be/eeO-rWYFuG0

let mobilenet;
let classifier;
let video;
let label = 'test';
let ukeButton;
let whistleButton;
let trainButton;

function modelReady() {
  console.log('Model is ready!!!');
}

function videoReady() {
  console.log('Video is ready!!!');
}

function whileTraining(loss) {
  if (loss == null) {
    console.log('Training Complete');
    classifier.classify(gotResults);
  } else {
    console.log(loss);
  }
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

  ukeButton = createButton('A');
  ukeButton.mousePressed(function() {
    classifier.addImage(video,'A');
    console.log('A');
  });

  whistleButton = createButton('B');
  whistleButton.mousePressed(function() {
    classifier.addImage(video,'B');
    console.log('B');
  });

  IsButton = createButton('C');
  IsButton.mousePressed(function() {
    classifier.addImage(video,'C');
    console.log('C');
  });

  KevButton = createButton('D');
  KevButton.mousePressed(function() {
    console.log('D');
    classifier.addImage(video,'D');
  });

  Button1 = createButton('E');
  Button1.mousePressed(function() {
    classifier.addImage(video,'E');
    console.log('E');
  });

  Button2 = createButton('F');
  Button2.mousePressed(function() {
    classifier.addImage(video,'F');
    console.log('F');
  });

  Button3 = createButton('E');
  Button3.mousePressed(function() {
    classifier.addImage(video,'E');
    console.log('E');
  });

  Button4 = createButton('G');
  Button4.mousePressed(function() {
    classifier.addImage(video,'G');
    console.log('G');
  });

  Button4 = createButton('H');
  Button4.mousePressed(function() {
    classifier.addImage(video,'H');
    console.log('H');
  });

  Button5 = createButton('I');
  Button5.mousePressed(function() {
    classifier.addImage(video,'I');
    console.log('I');
  });

  trainButton = createButton('train');
  trainButton.mousePressed(function() {
    classifier.train(whileTraining);
  });

  saveButton = createButton('save');
  saveButton.mousePressed(function () {
    classifier.save();
  });
}



  

function draw() {
  background(0);
  image(video, 0, 0, 320, 240);
  fill(255);
  textSize(16);
  text(label, 10, height - 10);
}