import multer from "multer";
// import crypto from "crypto"

// console.log(crypto.randomBytes(128).toString("hex"))

//? node -e "console.log(require('crypto').randomBytes(128).toString('base64url'))" 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    // You can customize the filename here
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });
//? Math.random()
//? 8:15:36 