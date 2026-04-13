const http = require('http');
const fetchData = require('./fetchData');
const writedata = require('./usefsmodule');

const PORT = 4007;

const server = http.createServer(async (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url == '/msg' && req.method == "GET") {
    res.setHeader('Content-Type', 'text/html');
    return res.end("<h1>Welcome message from Node Server</h1>");
  }

  if (req.url == '/data' && req.method == "GET") {
    res.setHeader('Content-Type', 'application/json');
    const apiData = await fetchData();
    return res.end(JSON.stringify({ msg: apiData }));
  }

  if (req.url == '/writedata' && req.method == "GET") {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ msg: "Write data route working" }));
  }

  res.statusCode = 404;
  res.end("Route not found");

});

server.listen(PORT, () => {
  console.log(`Service is available at ${PORT}`);
});