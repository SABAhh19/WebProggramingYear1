import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import "./db.js";
import productRoute from "./routes/productRoute.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
import authMiddleware from "./routes/authMiddle.js";

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use("/auth", authRoute);
app.use("/users", authMiddleware, userRoute);
app.use("/products", authMiddleware, productRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
