const express = require("express");
const mongoose = require("mongoose");
//mongodb+srv://SABA:SabaSaba37@sabas.bcg2plf.mongodb.net/

const app = express();
const PORT = 8080;

app.use(express.json());

const MONGO_URL = "mongodb+srv://SABA:SabaSaba37@sabas.bcg2plf.mongodb.net/";

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
