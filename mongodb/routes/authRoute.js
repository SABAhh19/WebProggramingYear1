import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();

const user = { id: 1, username: "saba", password: "saba123" };

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username == null || password == null) {
    return res.status(400).send("credentials are not provided");
  }

  if (username != user.username || password != user.password) {
    return res.status(400).send("wrong credentials");
  }

  const token = jwt.sign({ id: user.id, username: user.id }, "secret", {
    expiresIn: "1h",
  });
  res.json({ token });
});

export default router;
