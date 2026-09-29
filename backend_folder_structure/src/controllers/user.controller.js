export const userController = async (req, res) => {
    try {
        res.status(200).send("Hello World");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userLoginController = async (req, res) => {
    res.status(200).send("Login Page");
}