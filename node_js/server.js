import express from "express";
import cors from "cors";
import multer from "multer";

//? intializing server
const app = express();
app.use(express.json());
app.use(cors());

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
  console.log("Image file uploaded", req.file);
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  res.json({ message: "File uploaded successfully", file: req.file });
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

//? http://localhost:5000/products
