// file handling/ file operations using fs module
const fs = require("fs");

// write file asynchronously, always overwrite in case its called again, No Appending
fs.writeFile("example.txt", "Namaste, World!, Async write file", (err) => {});

// // Read File sync: This returns a result directly , we can use try catch for error handling
// let result = fs.readFileSync("./readFile.txt", "utf-8");
// console.log("sync file read: ", result);

// Read File Async (err, res) : expects callback function with 2 params it
// Doesn't return result directly but inside a callback function
fs.readFile("./example.txt", "utf-8", (err, res) => {
  if (err) console.log(err);
  console.log("Async file read: ", res);
});

// Append file sync, if file doesn't exist it creates a new file
fs.appendFileSync("./example.txt ", `Hi : ${Date.now()} \n`);

//  copy a file, fs.copyFile for copying directories fs.cpSync
fs.cpSync("./math.js", "./math.txt");

// Delete or unlink a file
fs.unlinkSync("./math.txt");

// stats for file

const statsForFile = fs.statSync("./.gitignore");
console.log("Stats: ", statsForFile);

//  make dir

fs.mkdirSync("./MakemyDirectoryY/sarthak/ss/if", { recursive: true });
