import express from "express";

const app = express();

app.use(express.json());

const users = [
  { id: 1, username: "saba", pass: "saba123" },
  { id: 2, username: "saba shav", pass: "shav123" },
  { id: 3, username: "niko", pass: "niko123" },
  { id: 4, username: "vasiko", pass: "vasiko123" },
];

const products = [
  { id: 1, item: "Mouse", price: 80 },
  { id: 2, item: "Monitor", price: 180 },
  { id: 3, item: "pc", price: 280 },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "bad request give good id" });
  }
  const findProd = users.find((user) => user.id === parsedId);
  if (!findProd) return res.sendStatus(404);
  return res.send(findProd);
});

app.post("/add-user", (req, res) => {
  console.log(`"adding new user"${req.body}`);
  const user = req.body;
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "bad request give good id" });
  }
  const findProd = products.find((prod) => prod.id === parsedId);
  if (!findProd) return res.sendStatus(404);
  return res.send(findProd);
});

app.post("/add-product", (req, res) => {
  const Nproduct = req.body;
  products.push(Nproduct);
  res.send(products);
  console.log(`added new product ${Nproduct}`);
});

app.post("/login", (req, res) => {
  const { username, pass } = req.body;
  const user = users.find((u) => u.username === username);

  if (user && user.pass === pass) {
    res.send("Login successful");
  } else {
    res.send("Invalid credentials");
  }
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
