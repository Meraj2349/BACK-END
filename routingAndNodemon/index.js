const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.writeHead(statusCode, { "content-type": "text/html" });

        res.write(data);
        res.end();
      }
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "contact.html");
  }else if(req.url==='/Error')
  {
    handleReadFile(404,"Error.html");
  }
});
server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
