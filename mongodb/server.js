import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import "./db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import { User } from "./Models/User.js";
import { Prod } from "./Models/User.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:8080");
});
