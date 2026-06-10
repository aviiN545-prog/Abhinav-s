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
  if (brightnessLevel < 2) brightnessLevel += 0.2;
  document.getElementById("pageContent").style.filter = `brightness(${brightnessLevel})`;
}

function decreaseBrightness() {
  if (brightnessLevel > 0.4) brightnessLevel -= 0.2;
  document.getElementById("pageContent").style.filter = `brightness(${brightnessLevel})`;
}




      

