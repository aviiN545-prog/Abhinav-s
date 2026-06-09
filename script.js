function reloadSite() {
  location.reload();
}

function toggleMenu() {
  const menu = document.getElementById("sideMenu");
  if (menu) menu.classList.toggle("show");
}

function toggleListWindow() {
  document.getElementById("listWindow").classList.toggle("show");
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
        function toggleFloatWindow() {
  document.getElementById("floatWindow").classList.toggle("show");


