function reloadSite() {
  location.reload();
}

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.classList.toggle("show");
}

function toggleMoreWindow() {
  document.getElementById("moreWindow").classList.toggle("show");
}


function toggleFloatWindow() {
  document.getElementById("floatWindow").classList.toggle("show");
}

function openSurprise() {
  const newWindow = window.open("", "_blank");
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Surprise!</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #74ebd5, #ACB6E5);
            text-align: center;
            padding: 50px;
          }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>🎉 Hello Abhinav!</h1>
        <p>This is your new tab with a custom message.</p>
      

      </body>
    </html>
  `);
}
// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Font size controls
function increaseFont() {
  let currentSize = parseFloat(document.body.style.fontSize || 16);
  document.body.style.fontSize = (currentSize + 2) + "px";
}
function decreaseFont() {
  let currentSize = parseFloat(document.body.style.fontSize || 16);
  if (currentSize > 10) {
    document.body.style.fontSize = (currentSize - 2) + "px";
  }
}

// Brightness controls
let brightnessLevel = 1;
function increaseBrightness() {
  document.body.classList.remove("bright-0");
  document.body.classList.add("bright-1");
}

function decreaseBrightness() {
  document.body.classList.remove("bright-1");
  document.body.classList.add("bright-0");
}

function resetBrightness() {
  document.body.classList.remove("bright-0", "bright-1", "bright-2");
}
function toggleFloatWindow() {
  const floatWindow = document.getElementById("floatWindow");
  floatWindow.classList.toggle("show");
}

// Close floating window when clicking outside
document.addEventListener("click", function(event) {
  const floatWindow = document.getElementById("floatWindow");
  const floatBtn = document.getElementById("floatBtn");

  // If window is open AND click is outside both the window and the button
  if (floatWindow.classList.contains("show") &&
      !floatWindow.contains(event.target) &&
      !floatBtn.contains(event.target)) {
    floatWindow.classList.remove("show");
  }
});
// Toggle the More window
function toggleMoreWindow() {
  const moreWindow = document.getElementById("moreWindow");
  moreWindow.classList.toggle("show");
}

// Close More window when clicking outside
document.addEventListener("click", function(event) {
  const moreWindow = document.getElementById("moreWindow");
  const moreBtn = document.querySelector(".listBtn"); // your "More" button

  // If window is open AND click is outside both the window and the button
  if (moreWindow.classList.contains("show") &&
      !moreWindow.contains(event.target) &&
      !moreBtn.contains(event.target)) {
    moreWindow.classList.remove("show");
  }
});







      

