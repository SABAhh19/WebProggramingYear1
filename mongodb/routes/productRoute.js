import express from "express";
import { Prod } from "../Models/User.js";

const router = express.Router();

router.post("/addProd", async (req, res) => {
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

export default router;
