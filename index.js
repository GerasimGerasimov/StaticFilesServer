const express = require("express")
const app = express()

let NodePath = process.argv[0];
let AppPath = process.argv[1];
let ServerPort = process.argv[2];
let FrontEndPath = process.argv[3];


console.log(`Sterting HTTP Server...`)
console.log(`  AppPath: ${AppPath}`)
console.log(`  ServerPort: ${ServerPort}`)
console.log(`  FrontEndPath: ${FrontEndPath}`)

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(FrontEndPath));//__dirname + '/build'));

console.log(`HTTP Server started at: ${ServerPort}`)
app.listen(ServerPort)