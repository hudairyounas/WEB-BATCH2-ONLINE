import express from "express";
import {
  loginController,
  signupController,
  verifyOtpController,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signupController);
authRouter.post("/verify-otp", verifyOtpController);
authRouter.post("/login", loginController);

export default authRouter;