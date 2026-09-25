import express from "express";

const app = express();

const PORT = 5000;



// app.use(express.static("public"))
// app.use(express.json())

//? middleware 1
app.use((req, res, next) => {
  console.log("Logger middleware 1");
//   check token for login user
    let token = req.headers.authorization
    if (token) {
        next();
    }
    else{
        res.send("Login first")
    }

});

//? middleware 2
app.use((req, res, next) => {
  console.log("Logger middleware 2");
  res.send("Hacked by middleware 2")
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


//? login = token => res => browser local storage => page reload => token verify => page render