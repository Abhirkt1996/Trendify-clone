import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js"; 

const app = express();
const port = process.env.PORT || 4000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRouter); 

// Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(port, () =>
  console.log(`🚀 Server is running at http://localhost:${port}`)
);
