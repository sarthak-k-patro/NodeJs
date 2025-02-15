const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, resp) => {
  console.log("new req received: ", req);
  const log = `New Request received on: ${Date.now()} \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    resp.end("Namaste From Server");
  });
});
const port = 8003;
myServer.listen(port, () => {
  console.log(`server started at: ${port}`);
});
