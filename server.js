const express = require("express");
const app = express();
const net = require("net");
var tcp = null;
var response = null;

function render(data) {
    return data;
}

var server = net.createServer(function (socket) {
    console.log("connected");
    tcp = socket;
    tcp.on("data", function (data) {
        response.send(render(data.toString()))
    })
})


server.listen(4000, function() {
    console.log("Listening 4000")
})

app.listen(3000, () => {
    console.log("Listening 3000")
})

app.get("/", (req, res) => {
    res.send("hello world!")
    
})
function handle(res) {
    res.send(ans)
}

app.get("/update", (req, res) => {
    console.log("new request")
    if (tcp !== null) {
        response = res
        tcp.write("request\n")
        
    } else {
        res.send("Hellow world")
    }
})