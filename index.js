const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/server-status", (req, res) => {
    res.send("Server is running properly");
})

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});

