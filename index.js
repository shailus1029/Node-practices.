const express = require("express");
const http = require("http");
require("dotenv").config();

//initilizing our express app
const app = express();
app.use(express.json());

app.get("/server-status", (req, res) => {
    res.send("Server is running properly");
})

//creating http server
const server = http.createServer(app);

//defining port
const PORT = 5000;

//listening to the port
server.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});

