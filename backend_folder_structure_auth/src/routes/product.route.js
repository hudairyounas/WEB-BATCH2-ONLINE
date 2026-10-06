import { Router } from "express";
import { verifyToken } from "../middlewares/auth.middleware.js";

const productRouter = Router();

productRouter.get("/",  verifyToken, (req, res) => {
    res.json({message: "All products"});
});

export default productRouter;