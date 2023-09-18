const http = require("http");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("This is my server");
});

server.listen(port, host, function () {
  console.log("listening on port " + port);
});
