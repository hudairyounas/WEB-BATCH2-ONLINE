import User from "../models/user.model.js"

const getUser = (req, res) => {
    res.send("all users");
}

const createUser = async(req, res) => {
    
    try {
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user =  await User.create({ name, email, password });
        if(!user){
            return res.status(400).json({ message: "Failed to create user" });
        }
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const deleteUser = (req, res) => {
    res.send("delete user");
}

const updateUser = (req, res) => {
    res.send("update user");
}

export { getUser, createUser, deleteUser, updateUser };