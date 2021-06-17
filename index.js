const express = require("express");

const PORT = 3000;

const app = express();

app.get("/server-status", (req, res) => {
    res.send("Server is running properly");
})

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});

