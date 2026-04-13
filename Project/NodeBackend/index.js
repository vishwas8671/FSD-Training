const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4007;

const server = http.createServer((req, res) => {

  // HOME ROUTE
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<h2 style="color:red;">Welcome to my node server</h2>');
  }

  // IMAGE ROUTE
  else if (req.url === "/img" && req.method === "GET") {
    const imgPath = path.join(__dirname, "image.jpg"); 

    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Image not found");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      }
    });
  }

  // 404 ROUTE
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// start server
server.listen(PORT, () => {
  console.log(`Service is available at http://localhost:${PORT}`);
});

