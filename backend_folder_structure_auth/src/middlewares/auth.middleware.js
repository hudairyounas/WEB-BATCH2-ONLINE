import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }


    const user = User.findOne({ email: decodedToken.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Only admin can access products
    if (req.originalUrl.includes("products") && user.role !== "admin") {
      return res.status(403).json({
        message: "Only admin can access products",
      });
    }

    if (user.role == "super-admin") {
      next();
      return;
    }



    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
