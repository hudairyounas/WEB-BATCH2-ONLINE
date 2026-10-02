import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


export const signupController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({
            message: "User already exists",
        });
    }


    const user = await User.create({ username, email, password });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ? Login Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).json({
        message: "Invalid email or password",
      });
    }

    const userData = {
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign({ userData }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    console.log(token)

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
