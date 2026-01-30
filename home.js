// home.js
// A simple separate ending for going home.

function drawHome() {
  background(225, 235, 245); // calm bluish tone
  fill(0);
  textAlign(CENTER, CENTER);

  textSize(40);
  text("Home", width / 2, 240);

  textSize(22);
  text("Okay, boring—have a nice day.", width / 2, 300);

  textSize(18);
  text("Click or press R to return to the Start.", width / 2, 360);
}

function homeMousePressed() {
  currentScreen = "start";
}

function homeKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}