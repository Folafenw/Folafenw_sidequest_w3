// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawStart() → what the start/menu screen looks like
// 2) input handlers → what happens on click / key press on this screen
// 3) a helper function to draw menu buttons

// ------------------------------------------------------------
// Start screen visuals
// ------------------------------------------------------------
// drawStart() is called from main.js only when:
// currentScreen === "start"
function drawStart() {
  // Background colour for the start screen
  background(180, 225, 220); // soft teal background

  // ---- Title text ----
  fill(30, 50, 60);
  textSize(46);
  textAlign(CENTER, CENTER);
  text("You're on a Walk", width / 2, 180);


// Prompt
  textSize(22);
  text("Where do you go?", width / 2, 210);

  // ---- Buttons (data only) ----
  // These objects store the position/size/label for each button.
  // Using objects makes it easy to pass them into drawButton()
  // and also reuse the same information for hover checks.
  const forestBtn = {
    x: width / 2,
    y: 320,
    w: 240,
    h: 80,
    label: "FOREST",
  };

  const homeBtn = {
    x: width / 2,
    y: 430,
    w: 240,
    h: 80,
    label: "HOME",
  };

  // Draw both buttons
  drawButton(forestBtn);
  drawButton(homeBtn);

  // ---- Cursor feedback ----
  // If the mouse is over either button, show a hand cursor
  // so the player knows it is clickable.
  const over = isHover(forestBtn) || isHover(homeBtn);
  cursor(over ? HAND : ARROW);
}

// ------------------------------------------------------------
// Mouse input for the start screen
// ------------------------------------------------------------
// Called from main.js only when currentScreen === "start"
function startMousePressed() {
  // For input checks, we only need x,y,w,h (label is optional)
  const forestBtn = { x: width / 2, y: 320, w: 240, h: 80 };
  const homeBtn = { x: width / 2, y: 430, w: 240, h: 80 };

  // If FOREST is clicked, go to the game screen
  if (isHover(forestBtn)) {
    currentScreen = "game";
  }
  // If HOME is clicked, go to the home screen
  else if (isHover(homeBtn)) {
    currentScreen = "lose";
  }
}

// ------------------------------------------------------------
// Keyboard input for the start screen
// ------------------------------------------------------------
// Provides keyboard shortcuts:
// - ENTER defaults to forest
// - h takes you home
function startKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game";
  }

  if (key === "h" || key === "H") {
    currentScreen = "lose";
  }
}

// ------------------------------------------------------------
// Helper: drawButton()
// ------------------------------------------------------------
// This function draws a button and changes its appearance on hover.
// It does NOT decide what happens when you click the button.
// That logic lives in startMousePressed() above.
//
// Keeping drawing separate from input/logic makes code easier to read.
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is over the button rectangle
  const hover = isHover({ x, y, w, h });

  noStroke();

  // ---- Visual feedback (hover vs not hover) ----
  // This is a common UI idea:
  // - normal state is calmer
  // - hover state is brighter + more “active”
  //
  // We also add a shadow using drawingContext (p5 lets you access the
  // underlying canvas context for effects like shadows).
  if (hover) {
    fill(255, 200, 150, 220); // warm coral on hover

    // Shadow settings (only when hovered)
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210); // soft cream base

    // Softer shadow when not hovered
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  // Draw the rounded rectangle button
  rect(x, y, w, h, 14);

  // Important: reset shadow so it does not affect other drawings
  drawingContext.shadowBlur = 0;

  // Draw the label text on top of the button
  fill(40, 60, 70);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
