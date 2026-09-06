import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRoute from "./src/routes/user.route.js";

const app = express();
app.use(express.json());
dotenv.config();
app.use("/user", userRoute)
//? user route is :  http://localhost:5000/user/
//? user post is :  http://localhost:5000/user/create



app.listen(5000, async () => {
    await connectDB();
    console.log("Server is running on port 5000");
});
// http://localhost:5000/user/all
