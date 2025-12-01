// let clasificador
let etiqueta
let confidencia
let video
let confianza = 0
let texto = ""

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

  fill(255);
  textSize(16);
  textAlign(CENTER);
  if (confianza > 0.7) {
    if (confianza === "Pikachu"){ 
      texto = " ⚡⚡ ¡Es un Pikachu! ⚡⚡"
    } else if (label === "Medalla") {
      texto = "¡Es una Medalla! "
    } else if (label === "Zorro") {
      texto = " ¡Es un Zorro! "
    }
  } else {
    texto = " No estoy seguro... ";
  }
  text (label + " " + confianza, width / 2, height - 4)
}

function gotResult (error, results) {

  if (error) {
    console.error(error);
    return;
  }


  
}