import express from "express";

//? intializing server
const app = express();

 
//? setting up api
// app.get("/products", (req, res) => {
//    const username = req.query.username;
//    const email = req.query.email;
//    const password = req.query.password;
//   if (!username || !email || !password) {
//     return res.status(400).json({message: "please provide a username, email, and password"})
//   }


//   return res.status(200).json({message: `products username: ${username}, email: ${email}, password: ${password}`})
// })


app.get("/products/:abc/:xyz/:prq",(req,res) => {
    const {abc, xyz, prq} = req.params;

    const {id} = req.query;

    if (!abc || !xyz || !prq || !id){
        return res.status(400).json({message: "please provide an params"})
    }

    return res.status(200).json({message: `product id: ${abc}, ${xyz}, ${prq}, ${id}`})
    
})

//? http://localhost:5000/products/bhjbhbhjbh/xyz/hjhghv?id=21215154

//? starting server
app.listen(5000, () => {
    console.log("server started on port 5000");
})

// axios.get("http://localhost:5000/")

//? http://localhost:5000/products