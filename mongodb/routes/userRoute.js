import express from "express";
import { User } from "../Models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {}
});

router.get("/get-by-id", async (req, res) => {
  try {
    const user = await User.findById("6a282aa80e68c5f89f2afb55");
    res.send(user);
  } catch (error) {}
});

router.post("/addUser", async (req, res) => {
  const user = await new User({
    username: "gia",
    password: "gia123",
  });
  user.save();
  res.send("success");
});

export default router;
