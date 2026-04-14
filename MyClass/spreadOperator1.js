// const books = [
//   {
//     item: "jinsebis taoba",
//     howMuch: "10",
//     money: "20",
//     language: "georgian",
//   },
//   {
//     item: "harry potter",
//     howMuch: "5",
//     money: "30",
//     language: "english",
//   },
//   {
//     item: "wigni",
//     howMuch: "7",
//     money: "45",
//     language: "spanish",
//   },
// ];

// const Process = (book) => {
//   const { item, ...rest } = book;
//   const discount = rest.money * 0.05;

//   const result = {};
//   result.name = item;
//   result.originalPrice = rest.money;
//   result.discount = discount;
//   result.otherInfo = rest;

//   return result;
// };

// books.forEach((book) => {
//   const result = Process(book);
//   console.log(
//     `${result.name}: $${result.originalPrice} - 5% discount = $${result.discount}`,
//   );
// });

// const add = (a, b) => a + b;
// const minus = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const divide = (a, b) => a / b;

// function calculator(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// calculator(10, 5, add);
// calculator(10, 5, minus);
// calculator(10, 5, mult);
// calculator(10, 5, divide);

// const products = [
//   { name: "Shirt", price: 40 },
//   { name: "Shoes", price: 120 },
//   { name: "Hat", price: 25 },
//   { name: "Jacket", price: 200 },
// ];
// const expensiveProducts = products
//   .filter((product) => product.price > 100)
//   .map((product) => product.name);

// console.log(expensiveProducts);

const students = [
  { name: "Nina", score: 45 },
  { name: "Gio", score: 80 },
  { name: "Saba", score: 67 },
  { name: "Lia", score: 90 },
];

const topStudents = students
  .sort((a, b) => b.score - a.score) // Highest first
  .filter((s, i) => i < 3) // Top 3 only
  .map((s) => s.name); // Names

console.log(topStudents); // ["Lia", "Gio", "Saba"]
