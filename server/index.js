const http = require("http");
const fs = require("fs");
const express = require("express");
const port = 8003;
// const myServer = http.createServer((req, resp) => {
//   console.log("new req received: ", req);
//   const log = `New Request received on: ${Date.now()} & at path : ${
//     req.url
//   } \n`;
//   fs.appendFile("log.txt", log, (err, data) => {});
//   switch (req.url) {
//     case "/":
//       resp.end("Namaste From Server");
//       break;
//     case "/home":
//       resp.end("HomePage");
//       break;
//     case "/about":
//       resp.end("Namaste I am Sarthak Patro");
//       break;
//     default:
//       resp.end("404 Not Found");
//   }
// });
const app = express();
app
  .route("/")
  .get((req, res) => {
    console.log("res and req shown in page");
    res.json({ res: "Sarthak" });
  })
  .post((req, res) => {
    res.json({
      msg: "Success hai bhai post call / pe",
    });
  });

app.listen(port, () => {
  console.log(`server started at: ${port}`);
});
