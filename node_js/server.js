const express = require("express");

const app = express()
const port = 5000;


app.get("/", (req, res) => {
    res.send("<h1>Hello from express</h1>")
});

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})