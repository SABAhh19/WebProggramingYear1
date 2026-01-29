let num = prompt("put ur number in");
let myNum = 19;
while (num != myNum) {
  if (num > myNum) {
    alert("ur number is higher");
    num = prompt("put new number in");
  } else if (num < myNum) {
    alert("ur number is lower");
    num = prompt("put new number in");
  }
}
if ((num = myNum)) {
  alert("u got it right");
}
