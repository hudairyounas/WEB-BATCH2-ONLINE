import { Router } from "express";
import { createUser, getUser, deleteUser, updateUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUser)
router.get("/create", createUser)
router.get("/delete", deleteUser)
router.get("/update", updateUser)


export default router;
