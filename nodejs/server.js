import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/uploads", express.static("uploads"));

async function main() {
  try {
    await mongoose.connect(
      "mongodb://futureplix2_db_user:DzJXzpv8BhkFds5x@ac-ccfqnpe-shard-00-00.nxbmxsx.mongodb.net:27017,ac-ccfqnpe-shard-00-01.nxbmxsx.mongodb.net:27017,ac-ccfqnpe-shard-00-02.nxbmxsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-j7i8bo-shard-0&authSource=admin&appName=Cluster0",
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log("Error in mongodb connection: ", error);
    process.exit(1);
  }
}

//? 22

app.get("/", (req, res) => {
  res.json({ message: "Hello World get" });
});

app.post("/", (req, res) => {
  const { name, age, password } = req.query;

  if (!name || !age || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter your name and age and password",
    });
  }

  return res.status(200).json({
    success: true,
    message: `Hello ${name} and your age is ${age} and password is ${password}`,
  });
});

app.post("/product/:abc/xyz", (req, res) => {
  const { abc, xyz } = req.params;
  const { city } = req.query;

  if (!abc) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter your abc and xyz" });
  }

  if (!city) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter your city" });
  }

  return res.status(200).json({
    success: true,
    message: `Hello abc is ${abc} and xyz is ${xyz} and your city is ${city}`,
  });
});

app.post("/product/create", (req, res) => {
  console.log("product fetch.....", req.body);
  const { name, email, password } = req.body;

  if (!email || !name || !password) {
    return res.status(500).json({
      success: false,
      message: "Please enter your email and name and password",
    });
  }

  return res.status(200).json({
    success: true,
    message: "user data fetch successfully",
    user: req.body,
  });
});
//? ddos
//? 1min 10000
//? bot

// app.post("/login",(req,res)=>{
//   const name = req.headers;
//   console.log(req.headers)

//   if (!name) {
//     return res.status(400).json({message: "You are not authorized"})
//   }

//   return res.status(200).json({message: "You are authorized", user:name})
// })

//? multer

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1],
    );
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  return res.json({ data: req.file });
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, minLength: 3, maxLength: 20, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, minLength: 5, maxLength: 20, required: true },
    date: { type: Date, default: Date.now() },
    active: { type: Boolean, default: false },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true },
);

const userModel = mongoose.model("user", userSchema);

app.post("/user", async (req, res) => {
  try {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter your name and email and password",
    });
  }

  const user = await userModel.create({
    name,
    email,
    password,
  });

  if (!user) {
    return res.status(500).json({
      success: false,
      message: "user not created",
    });
  }

  return res.status(200).json({
    success: true,
    message: "user data created successfully",
    user,
  });
} catch (error) {
  return res.status(500).json({
    success: false,
    message: "error in user creation",
  });
}
});

app.listen(PORT, async () => {
  await main();
  console.log(`server is running at port number ${PORT}`);
});

//? npm init -y
//? npm install express
//? npm run dev

//? https://dummyjson.com/products

//? params
//? query
//? headers
//? body
//? cookies
//? files

//? http://localhost:5000/user?name=john&age=25&password=12345

//? https://github.com/openai
//? https://github.com/anthropics
//? https://github.com/hudairyounas?tab=repositories

//? SQL
//? Non-SQL => mongodb => JSON

//? MERN => MongoDB => Express => React => Nodejs
