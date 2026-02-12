// let game = {
//   teamA: 0,
//   teamB: 0,
// };

// let name = prompt("which team scored");

// function goal(name) {
//   if (name === "A") {
//     game.teamA++;
//     console.log("added one point to a");
//   } else {
//     game.teamB++;
//     console.log("added one point to b");
//   }
// }

// console.log(goal(name));
// console.log(game);

// const name = prompt("name");
// const age = prompt("age");
// const isCapitan = prompt("are u capitan (true/false)");
// const player = {
//   name,
//   age,
//   isCapitan,
// };

// console.log(name);
// if (isCapitan === "true") {
//   console.log(
//     "this player is capitan!" + player.name + " and age" + player.age,
//   );
// } else {
//   console.log(
//     "regular team member Name:" + player.name + " and age" + player.age,
//   );
// }

let students = [
  { name: "Nika", score: 80 },
  { name: "Luka", score: 55 },
  { name: "Ana", score: 92 },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].score >= 60) {
    console.log(students[i].name + " passed");
  } else {
    console.log(students[i].name + " failed");
  }
}
