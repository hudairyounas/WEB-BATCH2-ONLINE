import express from "express";

const app = express();
const PORT = 5000

app.get("/", (req, res) => {
    res.json({message: "Hello World get"})
})

app.post("/", (req, res) => {
  const {name, age, password} = req.query;



  if (!name || !age || !password) {
    return res.status(400).json({success: false, message: "Please enter your name and age and password"})
  }

  res.status(200).json({success: true, message: `Hello ${name} and your age is ${age} and password is ${password}`})
})


app.post("/product/:abc/xyz", (req, res) => {

  const {abc, xyz} = req.params;
  const {city} = req.query;


  if (!abc) {
    return res.status(400).json({success: false, message: "Please enter your abc and xyz"})
  }

  if (!city) {
    return res.status(400).json({success: false, message: "Please enter your city"})
  }

  res.status(200).json({success: true, message: `Hello abc is ${abc} and xyz is ${xyz} and your city is ${city}`})
})

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});

//? npm init -y
//? npm install express
//? npm run dev

//? https://dummyjson.com/products

//? params
//? query
//? headers
//? body
//? cookies
//? files

//? http://localhost:5000/product/bjhhhjb/xyz