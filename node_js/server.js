
const express = require("express");

//? intializing server
const app = express();

 
//? setting up api
app.get("/products", (req, res) => {
   res.json({ message: "welcome to simple nodejs server"})
})


//? starting server
app.listen(5000, () => {
    console.log("server started on port 5000");
})

// axios.get("http://localhost:5000/")

//? http://localhost:5000/products