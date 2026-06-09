import express from "express";
import { Prod } from "../Models/User";

const router = express.router();

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

router.listen(PORT, () => {
  console.log("Server is running on port http://localhost:8080");
});

export default router;
