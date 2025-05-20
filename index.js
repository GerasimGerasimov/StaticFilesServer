const express = require("express")
const cors = require("cors");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");

const app = express()

let NodePath = process.argv[0];
let AppPath = process.argv[1];
let ServerPort = process.argv[2];
let FrontEndPath = process.argv[3];

console.log(`Starting HTTP Server...`)
console.log(`  AppPath: ${AppPath}`)
console.log(`  ServerPort: ${ServerPort}`)
console.log(`  FrontEndPath: ${FrontEndPath}`)

app.use(cors({ origin: true }));
app.use(express.static(FrontEndPath));

console.log(`HTTP Server started at: ${ServerPort}`)

const cert = fs.readFileSync(path.resolve(__dirname, "./cert/_.intmash.ru.crt"));
const key = fs.readFileSync(path.resolve(__dirname, "./cert/private_key.key"));
https.createServer({
    cert,
    key
}, app).listen(ServerPort)