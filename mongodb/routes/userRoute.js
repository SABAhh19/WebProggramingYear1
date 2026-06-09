import express from "express";
import { User } from "../Models/User";

const router = express.router();

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

router.post("/addPro", async (req, res) => {
  try {
    const prod = await new Prod({
      name: "margiela",
      category: "shoes",
      price: 300,
    });
    await prod.save();
    res.send("success");
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post("/addUser", async (req, res) => {
  const user = await new User({
    username: "gia",
    password: "gia123",
  });
  user.save();
  res.send("success");
});

router.listen(PORT, () => {
  console.log("Server is running on port http://localhost:8080");
});

export default router;
