const express = require("express");
const app = express();
const net = require("net");
var response = null;

function render(data) {
    console.log(data)
    const lines = data.split("\n")
    return data;
}


const client = new net.Socket();

client.connect(4000, "192.168.51.112", function() {
    console.log("connected!");
});

client.on("data", function(data) {
    response.write(render(data.toString()))
})

client.on("end", function(data) {
    console.log("Tembusu is down")
})

app.listen(3000, () => {
    console.log("Listening 3000")
})

app.get("/", (req, res) => {
    res.send("hello world!")
    
})

app.get("/check", (req, res) => {
    if (client !== null) {
        response = res
        client.write("check\n")
    } else {
        res.send("Hellow world")
    }
})