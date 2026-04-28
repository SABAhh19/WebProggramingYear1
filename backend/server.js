import express, { response } from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, username: "saba", age: 16 },
  { id: 2, username: "saba shav", age: 17 },
  { id: 3, username: "niko", age: 20 },
];

const prod = [
  { id: 1, name: "saba", pr: 16 },
  { id: 2, name: "saba shav", pr: 17 },
  { id: 3, name: "niko", pr: 20 },
];

app.get("/users", (req, res) => {
  const { username } = req.query;

  if (username) {
    const filter = users.filter((user) => user.username === username);
    return res.status(200).send(filter);
  }

  res.status(200).send(users);
});

app.post("/users", (req, res) => {
  const body = req.body;
  const newId = users[users.length - 1].id + 1;
  const newUser = {
    id: newId,
    username: body.username,
    password: body.password,
  };
  users.push(newUser);
  res.send(users);
});

app.listen(3000, () => {
  console.log("app is listening at http://localhost:3000");
});
