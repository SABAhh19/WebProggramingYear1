import express from "express";

const app = express();

app.use(express.json());

const products = [
  { id: 1, category: "shoes", name: "Margiela Gats", price: 149 },
  { id: 2, category: "clothing", name: "Levis jeans", price: 89 },
  { id: 3, category: "clothing", name: "Zara jacket", price: 119 },
  { id: 4, category: "shoes", name: "Premiata", price: 239 },
  { id: 5, category: "clothing", name: "Burberry shirt", price: 169 },
];

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

// const users = [
//   { id: 1, username: "saba", pass: "saba123" },
//   { id: 2, username: "saba shav", pass: "shav123" },
//   { id: 3, username: "niko", pass: "niko123" },
//   { id: 4, username: "vasiko", pass: "vasiko123" },
// ];

// const products = [
//   { id: 1, item: "Mouse", price: 80 },
//   { id: 2, item: "Monitor", price: 180 },
//   { id: 3, item: "pc", price: 280 },
// ];

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.get("/users/:id", (req, res) => {
//   const parsedId = parseInt(req.params.id);
//   if (isNaN(parsedId)) {
//     return res.status(400).send({ msg: "bad request give good id" });
//   }
//   const findProd = users.find((user) => user.id === parsedId);
//   if (!findProd) return res.sendStatus(404);
//   return res.send(findProd);
// });

// app.post("/add-user", (req, res) => {
//   console.log(`adding new user ${req.body}`);
//   const user = req.body;
// });

// app.get("/products", (req, res) => {
//   res.send(products);
// });

// app.get("/products/:id", (req, res) => {
//   const parsedId = parseInt(req.params.id);
//   if (isNaN(parsedId)) {
//     return res.status(400).send({ msg: "bad request give good id" });
//   }
//   const findProd = products.find((prod) => prod.id === parsedId);
//   if (!findProd) return res.sendStatus(404);
//   return res.send(findProd);
// });

// app.post("/add-product", (req, res) => {
//   const nProduct = req.body;
//   products.push(nProduct);
//   res.send(products);
//   console.log(`added new product ${nProduct}`);
// });

// app.post("/login", (req, res) => {
//   const { username, pass } = req.body;
//   const user = users.find((u) => u.username === username);

//   if (user && user.pass === pass) {
//     res.send("Login successful");
//   } else {
//     res.send("Invalid username or password");
//   }
// });

// app.patch("/products/:id", (req, res) => {
//   const parsedId = parseInt(req.params.id);
//   if (isNaN(parsedId)) {
//     return res.status(400).send("id should be number");
//   }

//   let product = products.find((p) => p.id === parsedId);
//   if (!product) {
//     return res.status(404).send("no product on that id");
//   }

//   product.price = req.body.price;
//   return res.status(200).send("product discount added");
// });

// app.put("/products/:id", (req, res) => {
//   const parsedId = parseInt(req.params.id);
//   if (isNaN(parsedId)) {
//     return res.status(400).send("id should be number");
//   }

//   let product = products.find((p) => p.id === parsedId);
//   if (!product) {
//     return res.status(404).send("no product on that id");
//   }

//   product.item = req.body.item;
//   product.price = req.body.price;

//   return res.status(200).send("product has changed");
// });

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
