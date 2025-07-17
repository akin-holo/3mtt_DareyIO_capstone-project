import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Akin Holo's Movie Recommendation API is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Globar error handling
app.use((err, req, res, next) => {
  console.error('🔴 Global Error:', err.stack);
  res.status(500).json({ message: 'Something went wrong on the server' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
   console.log(`Server running on port ${process.env.PORT}`)
);