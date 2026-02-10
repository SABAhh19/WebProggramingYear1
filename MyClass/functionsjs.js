// const array = ["loma", "osa", "paxtara"];
// let user = prompt("sheikvanet saxeli");
// if (array.includes(user)) {
//   alert("shesulixart");
// } else {
//   array.push(user);
//   alert("the account is created");
// }

function countEven(numbers) {
  sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum++;
    }
  }
  return sum;
}

const numbers1 = [1, 4, 6, 9, 12, 15];
const numbers2 = [2, 3, 5, 7, 11, 14, 18];
console.log(countEven(numbers1));
console.log(countEven(numbers2));
