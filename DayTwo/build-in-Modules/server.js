const http = require('http');
const os = require("os");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.end("This Is My First Server");
});

console.log("Free Memory (MB):", os.freemem() / 1024 / 1024);
console.log("Home Dir:", os.homedir());
console.log("Hostname:", os.hostname());
console.log(__dirname);

// write file
fs.writeFileSync("message.txt", "We are learning Node.js");

// read file
const fileData = fs.readFileSync("message.txt", "utf-8");
console.log(fileData);

// create folder safely
const filemngrpath = path.join(__dirname, "fileManager");
console.log(filemngrpath, "fileManagerPath");

fs.mkdirSync(filemngrpath, { recursive: true });

// create file inside folder
const fileReactPath = path.join(filemngrpath, "message.txt");

fs.writeFileSync(fileReactPath, "Learned React");

console.log("File created inside fileManager folder");

server.listen(5000, () => {
    console.log("Server Started");
});