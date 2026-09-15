import express from "express";

const app = express();
const PORT = 5000

app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

app.listen(PORT, () => {
  console.log(`server is running at port number ${PORT}`);
});

//? npm init -y
//? npm install express
//? npm run dev

