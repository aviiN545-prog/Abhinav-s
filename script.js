function reloadSite() {
  location.reload();
}

function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show");
}

function toggleListWindow() {
  document.getElementById("listWindow").classList.toggle("show");
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
        
        document.addEventListener("click", function(e) {
  if (!document.getElementById("listWindow").contains(e.target) &&
      !document.querySelector(".listBtn").contains(e.target)) {
    document.getElementById("listWindow").classList.remove("show");
  }
});

      </body>
    </html>
  `);
}

