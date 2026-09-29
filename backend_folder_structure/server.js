import express from "express";
import userRouter from "./src/routes/user.route.js";

const app = express();
const PORT = 5000;

app.use("/user", userRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//? GET => / => function
//? http://localhost:5000/user