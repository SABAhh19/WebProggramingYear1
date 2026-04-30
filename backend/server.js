import express, { response } from "express";

const app = express();

app.use(express.json());

const products = [
  { id: 1, name: "star wars" },
  { id: 2, name: "smallville" },
  { id: 3, name: "superman" },
  { id: 4, name: "flash" },
];

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) {
    return res.status(400).send({ msg: "bad request give good id" });
  }
  const findProd = products.find((user) => user.id === parsedId);
  if (!findProd) return res.sendStatus(404);
  return res.send(findProd);
});

app.listen(3000, () => {
  console.log("listening at http://localhost:3000");
});
