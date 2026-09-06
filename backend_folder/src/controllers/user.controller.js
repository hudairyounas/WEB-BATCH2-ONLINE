const getUser = (req, res) => {
    res.send("all users");
}

const createUser = (req, res) => {
    res.send("create user");
}

const deleteUser = (req, res) => {
    res.send("delete user");
}

const updateUser = (req, res) => {
    res.send("update user");
}

export { getUser, createUser, deleteUser, updateUser };