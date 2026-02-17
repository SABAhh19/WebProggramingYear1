const products = [
  {
    name: "Headphones",
    price: 120,
    discount: 20,
    inStock: true,
  },
  {
    name: "Keyboard",
    price: 80,
    discount: 10,
    inStock: false,
  },
  {
    name: "Mouse",
    price: 40,
    discount: 5,
    inStock: true,
  },
  {
    name: "Monitor",
    price: 300,
    discount: 50,
    inStock: true,
  },
];
for (let i = 0; i < products.length; i++) {
  if (products[i].inStock) {
    const finalPrice = products[i].price * (1 - products[i].discount / 100);
    console.log(
      products[i].name,
      " : final price after ",
      products[i].discount,
      "% discount is ",
      finalPrice,
    );
  } else {
    console.log("the product is not available");
  }
}

// const cart = {
//   user: "Ana",
//   items: ["Headphones", "Mouse", "Keyboard"],
//   prices: [120, 40, 80],
// };
// let sum = 0;

// for (let i = 0; i < cart.items.length; i++) {
//   console.log(cart.items[i]);
// }
// for (let i = 0; i < cart.prices.length; i++) {
//   sum = sum + cart.prices[i];
// }
// console.log("total price is ", sum);
