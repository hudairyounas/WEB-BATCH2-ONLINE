import express from "express";
import {
  userRegisterController
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.post("/register", upload.single("image"), userRegisterController);

export default router;
