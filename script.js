// Reload site
function reloadSite() {
  location.reload();
}

// Toggle side menu
function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.classList.toggle("show");
}

// Toggle More window
function toggleMoreWindow() {
  const moreWindow = document.getElementById("moreWindow");
  moreWindow.classList.toggle("show");
}

// Toggle Floating window
function toggleFloatWindow() {
  const floatWindow = document.getElementById("floatWindow");
  floatWindow.classList.toggle("show");
}

// Surprise button
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

// Brightness controls (using CSS classes)
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

// Close windows when clicking outside
document.addEventListener("click", function(event) {
  const floatWindow = document.getElementById("floatWindow");
  const floatBtn = document.getElementById("floatBtn");
  const moreWindow = document.getElementById("moreWindow");
  const moreBtn = document.querySelector(".listBtn");

  // Close floating window if open and click is outside
  if (floatWindow.classList.contains("show") &&
      !floatWindow.contains(event.target) &&
      !floatBtn.contains(event.target)) {
    floatWindow.classList.remove("show");
  }

  // Close More window if open and click is outside
  if (moreWindow.classList.contains("show") &&
      !moreWindow.contains(event.target) &&
      !moreBtn.contains(event.target)) {
    moreWindow.classList.remove("show");
  }
});








      

