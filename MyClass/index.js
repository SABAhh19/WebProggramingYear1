// const numbers = [1, 2, 4, 77, 5, 34];

// const divisibleBy7 = numbers.find((num) => num % 7 === 0);

// console.log(divisibleBy7);

const numbers = [1, 2, 3, 4];
// const newNumbers = numbers.map((num) => num * 2);
// console.log(newNumbers);

function myMap(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}
const divided = myMap(numbers, (num) => num * 2);
console.log(divided);
