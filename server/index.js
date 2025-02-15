const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, resp) => {
  console.log("new req received: ", req);
  const log = `New Request received on: ${Date.now()} & at path : ${
    req.url
  } \n`;
  fs.appendFile("log.txt", log, (err, data) => {});
  switch (req.url) {
    case "/":
      resp.end("Namaste From Server");
      break;
    case "/home":
      resp.end("HomePage");
      break;
    case "/about":
      resp.end("Namaste I am Sarthak Patro");
      break;
    default:
      resp.end("404 Not Found");
  }
});
const port = 8003;
myServer.listen(port, () => {
  console.log(`server started at: ${port}`);
});
