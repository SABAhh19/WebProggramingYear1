const items = [
  { item: "Linen Overshirt", price: "$79.99" },
  { item: "Margiela Gats", price: "$149.99" },
  { item: "Levis jeans", price: "$89.99" },
  { item: "Zara Jacket", price: "$119.99" },
  { item: "Valentino", price: "$159.99" },
];

const names = document.getElementsByClassName("product-name");
const prices = document.getElementsByClassName("price");
const stock = document.getElementsByClassName("meta");

for (let i = 0; i < items.length; i++) {
  names[i].innerHTML = items[i].item;
  prices[i].innerHTML = items[i].price;
  stock[i].innerHTML = items[i].inStock;
}
