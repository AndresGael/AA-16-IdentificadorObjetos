let clasificador
let etiqueta
let confidencia
let video

function preload() {
  // put preload code here
  clasificador = ml5.imageClassifier("MobileNet")
}

function setup() {
  // put setup code here
  createCanvas(640,480)
  video = createCapture(VIDEO)
  video.size(640,480)
  video.hide()
  clasificarVideo()
}

function clasificarVideo() {
  clasificador.classify(video, gotResults)
}

function gotResults(results) {
  etiqueta = results[0].label
  confidencia = results[0].confidence
  clasificarVideo()
}

function draw() {
  // put drawing code here
  image(video,0,0)
  textSize(32)
  fill("light green")
  text(etiqueta,10,20)
  text(confidencia,10, 60)
}