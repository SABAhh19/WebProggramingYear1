import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true, min: 80, max: 230 },
});

export const User = mongoose.model("User", userSchema);
export const Prod = mongoose.model("Products", productSchema);
