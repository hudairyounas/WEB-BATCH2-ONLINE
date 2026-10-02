import User from "../models/user.model.js";

export const userRegisterController = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        if(!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });

        if(existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({ username, email, password });

        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating user" });
    }
}