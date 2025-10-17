import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import flatRoutes from "./routes/flatRoutes.js";
import tiffinRoutes from "./routes/tiffinRoutes.js";
import rentalRoutes from "./routes/rentalRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/flats", flatRoutes);
app.use("/api/tiffins", tiffinRoutes);
app.use("/api/rentals", rentalRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("CampusEase Backend API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
