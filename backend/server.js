import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/Todoroutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/todos", todoRoutes);

// database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/todoapp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
