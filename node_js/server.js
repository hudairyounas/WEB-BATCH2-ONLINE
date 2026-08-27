import express from "express";
import cors from "cors";

//? intializing server
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "please provide a name and email" });
  }
  console.log(name, email);

  return res
    .status(200)
    .json({ message: "user created successfully", user: { name, email } });
});

app.post("/api/user", (req, res) => {
  const { name, email } = req.headers;

  if (!name || !email) {
    return res.status(400).json({ message: "please provide a name and email" });
  }

  console.log(req.headers);

  return res
    .status(200)
    .json({ message: "user created successfully", user: { name, email } });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

//? http://localhost:5000/products
