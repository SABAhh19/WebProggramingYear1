import express from "express";

const app = express();

const users = [
  { id: 1, username: "saba", age: 16 },
  { id: 2, username: "saba shav", age: 17 },
  { id: 3, username: "niko", age: 20 },
];

app.get("/users", (req, res) => {
  const { username } = req.query;

  if (username) {
    const filter = users.filter((user) => user.username === username);
    return res.status(200).send(filter);
  }

  res.status(200).send(users);
});

app.listen(3000, () => {
  console.log("app is listening at http://localhost:3000");
});
