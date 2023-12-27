import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import { v2 as cloudinary } from "cloudinary";
import cors from "cors";

dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//middlewares
app.use(express.json({ limit: "50mb" })); // to parse the json data in the req.body
app.use(express.urlencoded({ extended: true })); // to parse from data in the req.body
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/", (req, res) => {
  res.send("<h1>Server is Working</h1>");
});

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
