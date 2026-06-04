import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import "./db.js";
//mongodb+srv://SABA:SabaSaba37@sabas.bcg2plf.mongodb.net/

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

// const MONGO_URL = "mongodb+srv://SABA:SabaSaba37@sabas.bcg2plf.mongodb.net/";

// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     console.log("connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log("error connecting to MongoDB", err);
//   });

// async function doFetch() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     console.log(response);
//     const fetchs = await response.json();
//     console.log(fetchs);
//   } catch {
//     error;
//   }
//   {
//     console.error(error);
//   }
// }
// doFetch();

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     default: "tbilisi",
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const User = mongoose.model("User", userSchema);

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// app.post("/api/users", async (req, res) => {
//   const { name, age, city } = req.body;
//   const user = new User({
//     name,
//     age,
//     city,
//   });
//   await user.save();

//   res.status(201).json({ msg: "successfully added user", user: newUser });
// });

// app.get("/api/users", async (req, res) => {
//   const users = await User.find();

//   res.json({
//     count: users.length,
//     data: users,
//   });
// });

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
