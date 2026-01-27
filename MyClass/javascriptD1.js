// let grade = prompt("ur grade?");
// let grade1 = grade / 10;
// const num = 5;
// const num1 = 9;
// if (grade1 >= 9) {
//   alert("u passed the test very good");
// } else if (5 > grade1 < 9) {
//   alert("chaabaret mara nichivo ra");
// } else {
//   alert("chaiwerit meored agar moxvidet");
//
// const age = 19;
// const hasPremium = "yes";
// const bool = age > 18 || hasPremium === "yes";
// console.log(bool);

let age = prompt("whats ur age");
let parentWithU = prompt("do u have parent with u (yes/no)");
let haveTicket = prompt("do u have a ticket (yes/no)");
let late = prompt("are u late (yes/no)");
if (age >= 18 && haveTicket === "yes" && late === "no") {
  alert("u can enter jave a good watch");
} else if (age >= 13 && parentWithU === "yes" && haveTicket === "yes") {
  alert("u can enter jave a good watch");
} else if (late === "yes" || haveTicket === "no") {
  alert("cant go in");
} else {
  alert("u cant go in");
}
