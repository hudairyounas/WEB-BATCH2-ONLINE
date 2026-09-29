import express from "express";
import fs from "fs";

const app = express();

const PORT = 5000;



// app.use(express.static("public"))
// app.use(express.json())

//? middleware 1
app.use((req, res, next) => {
  console.log("Logger middleware 1");
  req.user = "Bilal"

  let date = new Date().toLocaleDateString();
  fs.appendFileSync("logs.txt", req.method + " " + date + "\n")

  console.log(req.method, date)
  next();
});

//? req modify
//? header modify



//? middleware 2
app.use((req, res, next) => {
  console.log("Logger middleware 2");
  next();
});

app.get("/", (req, res) => {
  console.log(req.user);
  
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//? login = token => res => browser local storage => page reload => token verify => page render