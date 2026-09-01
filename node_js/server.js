import express from "express";
import cors from "cors";
import multer from "multer";
import mongoose from "mongoose";

//? intializing server
const app = express();
app.use(express.json());
app.use(cors());

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/fb-b2");
    // await mongoose.connect("mongodb://localhost:27017/b-2")
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

// app.post("/register", (req, res) => {
//   const { name, email } = req.body;
//   if (!name || !email) {
//     return res.status(400).json({ message: "please provide a name and email" });
//   }
//   console.log(name, email);

//   return res
//     .status(200)
//     .json({ message: "user created successfully", user: { name, email } });
// });

// app.post("/api/user", (req, res) => {
//   const { name, email } = req.headers;

//   if (!name || !email) {
//     return res.status(400).json({ message: "please provide a name and email" });
//   }

//   console.log(req.headers);

//   return res
//     .status(200)
//     .json({ message: "user created successfully", user: { name, email } });
// });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(
//       null,
//       file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1],
//     );
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("image"), (req, res) => {
//   console.log("Image file uploaded", req.file);
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   res.json({ message: "File uploaded successfully", file: req.file });
// });

// app.post("/user", (req, res) => {

//   const {name,email,password} = req.body;

//   if(!name || !email || !password){
//     return res.status(400).json({message: "Please provide a name, email and password"});
//   }

//   console.log(name,email,password);

//   return res.status(200).json({message: "User created successfully", user: {name,email,password}});

// });

// const ProductSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   description: { type: String, required: true },
//   email: {
//     type: String,
//     unique: true,
//     validate: {
//       validator: function (v) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//       },
//       message: "Please enter a valid email address",
//     },
//     required: true,
//   },
//    date: { type: Date, default: Date.now },
// }, {timestamps: true});

// const Product = mongoose.model("Product", ProductSchema);

// // image upload and url get
// const storage = multer.diskStorage({
//   destination: "uploads/",
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

// app.post("/register", upload.single("image"), async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const file = req.file;

//     if (!name || !email || !password || !file) {
//       return res.status(400).json({
//         message: "All fields are required",
//       });
//     }

//     const image = `http://localhost:5000/uploads/${file.filename}`;

//     const userData = await User.create({
//       name,
//       email,
//       password,
//       image,
//     });

//     res.status(200).json({
//       message: "User registered successfully",
//       data: userData,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// });

// app.post("/product", async (req, res) => {
//   try {
//     const {title,price,description,email} = req.body;

//     if(!title || !price || !description || !email){
//       return res.status(400).json({message: "Please provide a title, price, description and email"});
//     }

//     const product = await Product.create({title, price, description, email});

//     return res.status(200).json({message: "Product created successfully", product});

//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({message: "Internal server error"});
//   }
// });

// app.get("/product", async (req, res)=> {
//   try {

//     const {title} = req.query;

//     if(!title){
//       return res.status(400).json({message: "Please provide a title"});
//     }

//     const product = await Product.findOne({title});
//     return res.status(200).json({message: "Product fetched successfully", product});
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({message: "Internal server error"});
//   }
// })

const UserSchema = mongoose.Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 50 },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Please enter a valid email address",
    },
    required: true,
  },
  phone: {type: Number, required: true, minLength: 11, maxLength: 11},
  password: { type: String, required: true },
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);


app.post("/register", async (req, res) => {
  try {
    const {name, email, password, phone} = req.body;

    if (!name || !email || !password || !phone){
      return res.status(400).json({message: "Please provide a name, email, password and phone"});
    };

    const userData = await User.create({name,email,password,phone});
    return res.status(200).json({message: "User created successfully", userData});

  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error", error: error.message});
  }
});





app.get("/user", async (req,res)=> {
  try {
    // const userData = await User.find();

    const {email} = req.query;

    if (!email) {
      return res.status(400).json({message: "Please provide a email"});
    };

    const userData = await User.findOne({email});

    if (!userData) {
      return res.status(400).json({message: "User not found"});
    };

    return res.status(200).json({message: "User fetched successfully", userData});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "Internal server error", error: error.message});
  }
})

app.listen(5000, async () => {
  await connectDB();
  console.log("server started on port 5000");
});

//? http://localhost:5000/products
//? 22

//? mongodb://<db_username>:rMN0xeTItwA9TAuW@ac-1qxqpui-shard-00-00.dwr6ilr.mongodb.net:27017,ac-1qxqpui-shard-00-01.dwr6ilr.mongodb.net:27017,ac-1qxqpui-shard-00-02.dwr6ilr.mongodb.net:27017/?ssl=true&replicaSet=atlas-v0jr0c-shard-0&authSource=admin&appName=Cluster0
