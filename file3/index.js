const http = require("http");
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "html" });

  res.write("hello world!");

  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`server is running http://${hostname}:${port}`);
});
