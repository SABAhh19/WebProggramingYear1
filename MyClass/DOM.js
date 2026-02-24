// const header = document.getElementById("header");
// const para1 = document.getElementById("para1");
// const para2 = document.getElementById("para2");

// header.innerHTML = "Hello World";
// para1.innerHTML = "paragrapi1";
// para2.innerHTML = "paragrapui2";

const paragraps = document.querySelectorAll("p");
for (let i = 0; i < paragraps.length; i++) {
  paragraps[i].innerHTML = "saba";
  paragraps[i].style.border = "3px solid black";
  paragraps[i].style.background = "red";
  paragraps[i].style.color = "green";
  paragraps[i].style.margin = "10px";
}
const header = document.querySelector("h1");
document.removeChild("h1");
header.innerHTML = "shavi";
