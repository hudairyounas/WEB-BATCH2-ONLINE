import express from "express";
import {
  userController,
  userLoginController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController);
router.post("/login", userLoginController);

export default router;
