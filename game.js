// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------

// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const chaseBtn = {
  x: 260, // x position (centre of the button)
  y: 560, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "CHASE IT", // text shown on the button
};

const leaveBtn = {
  x: 540, 
  y: 560, 
  w: 260, 
  h: 90, 
  label: "LEAVE IT ALONE",
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(36);
  textAlign(CENTER, CENTER);
  text("Forest", width / 2, 140);

  textSize(18);
  text(
    "You see a bird. What do you do?",
    width / 2,
    210,
  );


// Scene hint (optional)
  textSize(16);
  text("Tip: choose wisely…", width / 2, 240);

  // ---- Draw the buttons ----
  // We pass the button objects to a helper function
  drawChoiceButton(chaseBtn);
  drawChoiceButton(leaveBtn);

  // ---- Cursor feedback ----
  // If the mouse is over the button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(chaseBtn) || isHover(leaveBtn) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawChoiceButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  // Only trigger the outcome if the button is clicked
  if (isHover(chaseBtn)) {
    currentScreen = "lose" // pecked to death
  }
  else if (isHover(leaveBtn)) {
    currentScreen = "win"; // peaceful walk
  }
}

// ------------------------------
// Keyboard input for this screen
// ------------------------------
// Allows keyboard-only interaction (accessibility + design)

function gameKeyPressed() {
  // Optional keyboard shortcuts:
  if (key === "c" || key === "C") currentScreen = "lose"; // chase
  if (key === "l" || key === "L") currentScreen = "win";  // leave
}