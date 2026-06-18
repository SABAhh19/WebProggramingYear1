import { Router } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

const router = Router();

const user = { id: 1, username: "saba", password: "saba123" };

router.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    if (username == null || password == null) {
      return res.status(400).send("credentials are not provided");
    }

    if (username != user.username || password != user.password) {
      return res.status(400).send("wrong credentials");
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      },
    );
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      },
    );
    res.json({ accessToken, refreshToken }); 
  } catch (err) {
    res.send("errora");
  }
});

router.post("/refresh-token", async (req, res) => {});

export default router;