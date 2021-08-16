const express = require("express")
const cors = require ("cors");

const app = express()

let NodePath = process.argv[0];
let AppPath = process.argv[1];
let ServerPort = process.argv[2];
let FrontEndPath = process.argv[3];

console.log(`Sterting HTTP Server...`)
console.log(`  AppPath: ${AppPath}`)
console.log(`  ServerPort: ${ServerPort}`)
console.log(`  FrontEndPath: ${FrontEndPath}`)

app.use(cors({ origin: true }));
app.use(express.static(FrontEndPath));

console.log(`HTTP Server started at: ${ServerPort}`)
app.listen(ServerPort)